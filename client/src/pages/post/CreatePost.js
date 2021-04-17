import "./createpost.scss";

const CreatePost = () => {
  return (
    <div className="container create-post">
      <div className="row">
        <div className="col-12">
          <h2>Create Your Post</h2>
        </div>
        <div className="col-12 col-lg-6">
          <div className="mb-3">
            <label htmlFor="productImage" className="form-label">
              Default file input example
            </label>
            <input className="form-control" type="file" id="productImage" />
          </div>
          <div className="mb-3">
            <label htmlFor="productTitle" className="form-label">
              Product Title
            </label>
            <input
              type="text"
              className="form-control"
              id="productTitle"
              placeholder="Product Title"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="productDescription" className="form-label">
              Product Description
            </label>
            <textarea
              className="form-control"
              id="productDescription"
              rows="3"
            ></textarea>
          </div>
        </div>
        <div className="col-12 col-lg-6">
          <div className="mb-3">
            <label htmlFor="productLocation" className="form-label">
              Location
            </label>
            <input
              type="text"
              className="form-control"
              id="productLocation"
              placeholder="Location"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="productCategory" className="form-label">
              Category
            </label>
            <select
              className="form-control col-12"
              name="productCategory"
              aria-label="Default select example"
            >
              <option selected value="used">
                Used
              </option>
              <option value="new">New</option>
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="productSize" className="form-label">
              Size
            </label>
            <input
              type="text"
              className="form-control"
              id="productSize"
              placeholder="Size"
            />
          </div>
          <div className="mb-3 justify-content-end">
            <button type="button" className="btn btn-primary btn-primary--teal">
              Upload
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
