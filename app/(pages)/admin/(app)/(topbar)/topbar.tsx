// Topbar.js
"use client";
import "../styles.css";

function Topbar({ filterString, setFilterString }) {
    return (
        <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
            {/* ... other navbar items ... */}
            <form className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                <div className="input-group">
                    <input
                        type="text"
                        className="form-control bg-light border-0 small"
                        value={filterString}
                        onChange={(e) => setFilterString(e.target.value)} // Update filterString here
                        placeholder="Search for..."
                        aria-label="Search"
                        aria-describedby="basic-addon2"
                    />
                    <div className="input-group-append">
                        <button className="btn btn-primary" type="button">
                            {/* Search Icon */}
                        </button>
                    </div>
                </div>
            </form>
            {/* ... other navbar items ... */}
        </nav>
    );
}

export default Topbar;
