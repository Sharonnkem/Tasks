import { useEffect, useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCategories, setCurrentPage } from "../redux/categorySlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight, faTimes } from "@fortawesome/free-solid-svg-icons";
import AOS from "aos";
import "aos/dist/aos.css";
import "./mainPage.css";

const MainPage = () => {
  const dispatch = useDispatch();
  const { categories, searchQuery, currentPage, itemsPerPage } = useSelector((state) => state.category);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedPost, setSelectedPost] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000 }); 
  }, []);

  useEffect(() => {
    const fetchCategories = async () => {
      setIsLoading(true);
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await response.json();
        dispatch(setCategories(data.map((item) => ({
          id: item.id,
          title: item.title,
          body: item.body,
          userId: item.userId
        }))));
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchCategories();
  }, [dispatch]);

  const filteredCategories = useMemo(() => {
    return categories.filter(category =>
      category.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [categories, searchQuery]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentCategories = filteredCategories.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div>
      <div className="container">
        {isLoading ? (
          <p data-aos="fade-in">Loading data...</p>
        ) : currentCategories.length > 0 ? (
          <table className="table" data-aos="fade-up">
            <thead>
              <tr>
                <th>ID</th>
                <th>User ID</th>
                <th>Title</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {currentCategories.map((category) => (
                <tr key={category.id}>
                  <td>{category.id}</td>
                  <td>{category.userId}</td>
                  <td>{category.title}</td>
                  <td>
                    <button onClick={() => setSelectedPost(category)} className="view-btn">
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p data-aos="fade-in">No data found</p>
        )}
      </div>

      <div className="pagination">
        <button onClick={() => dispatch(setCurrentPage(currentPage - 1))} disabled={currentPage === 1}>
          <FontAwesomeIcon icon={faChevronLeft} /> 
        </button>
        <span>Page {currentPage}</span>
        <button onClick={() => dispatch(setCurrentPage(currentPage + 1))} disabled={indexOfLastItem >= filteredCategories.length}>
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>

      {selectedPost && (
        <div className="modal-overlay">
          <div className="modal-content" data-aos="zoom-in">
            <button className="close-btn" onClick={() => setSelectedPost(null)}>
              <FontAwesomeIcon icon={faTimes} />
            </button>
            <h3>Post Details</h3>
            <div className="details-table">
  
        <div className="details-row"><strong>Title:</strong> {selectedPost.title}</div>
         <div className="details-row"><strong>Body:</strong> {selectedPost.body}</div>
        </div>

          </div>
        </div>
      )}
    </div>
  );
};

export default MainPage;
