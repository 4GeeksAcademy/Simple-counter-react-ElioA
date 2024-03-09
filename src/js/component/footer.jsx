import React from "react";






const Footer=()=>{

    return (<div className="bg-dark" id="footer">
    <footer className="text-center text-white bg-dark">
      <div className="container pt-4">
        <section className="mb-4">
          <a
            className="btn btn-link btn-floating btn-lg  m-1"
            href="#!"
            role="button"
            
            ><i className="fab fa-facebook-f"></i
          ></a>
           <a
            className="btn btn-link btn-floating btn-lg  m-1"
            href="#!"
            role="button"
            data-mdb-ripple-color="dark"
            ><i className="fab fa-twitter"></i
          ></a>
          <a
            className="btn btn-link btn-floating btn-lg  m-1"
            href="#!"
            role="button"
            data-mdb-ripple-color="dark"
            ><i className="fab fa-google"></i
          ></a>
          <a
            className="btn btn-link btn-floating btn-lg  m-1"
            href="#!"
            role="button"
            data-mdb-ripple-color="dark"
            ><i className="fab fa-instagram"></i
          ></a>
           <a
            className="btn btn-link btn-floating btn-lg  m-1"
            href="#!"
            role="button"
            data-mdb-ripple-color="dark"
            ><i className="fab fa-linkedin"></i
          ></a>
           <a
            className="btn btn-link btn-floating btn-lg  m-1"
            href="#!"
            role="button"
            data-mdb-ripple-color="dark"
            ><i className="fab fa-github"></i
          ></a>
        </section>
        
      </div>
      <div className="text-center  p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
        © 2020 Copyright: From Elio With Love
        </div>
     
    </footer>
      
    </div>)
}

export default Footer