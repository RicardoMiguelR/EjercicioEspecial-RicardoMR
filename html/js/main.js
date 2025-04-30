const loadProducts = document.getElementById("loadProducts");
const insertCards = document.getElementById("insertCards");
const apiURL = "https://api.escuelajs.co/api/v1/products";
const alertaError = document.getElementById("alertaError");

const llamarApi = () => {
  loadProducts.addEventListener("click", (e) => {
    e.preventDefault();

    function getData() {
      return new Promise((resolve, reject) => {
        if (apiURL == null) {
          reject(new Error("Error al obtener los datos"));
        }
        resolve(apiURL);
      });
    }

    const fetch = async () => {
      try {
        const apiStore = await getData();
        const mostrarCards = apiStore.map((producto) => {
          return `
                    <div class="card shadow-sm">
                        <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
                        <div class="card-body">
                            <h1>${producto.title}</h1>
                            <p class="card-text">${producto.description}</p>
                            <div class="d-flex justify-content-between align-items-center">
                                <div class="btn-group">
                                    <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                                    <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                                </div>
                                <small class="text-body-secondary">${producto.price}</small>
                            </div>
                        </div>
                    </div>
                `;
        });
        insertCards.innerHTML = mostrarCards;
      } catch (error) {
        alertaError.insertAdjacentHTML(
          "beforeend",
          `
                <div class="alert alert-danger d-flex" role="alert">
                    <svg xmlns="http://www.w3.org/2000/svg" class="bi flex-shrink-0 me-2" width="50px" viewBox="0 0 16 16" role="img" aria-label="Warning:">
                    <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                    </svg>
                    <div>
                        <strong>${error.message}</strong>
                    </div>
                </div>
            `
        );
      }
    };
  });
};

// Ejercicio por terminar ... ******
