import React from "react"


	

const Crud = () => {

return(
<body>
<form  action="_functions.php" method="POST"/>
<div id="login" >
        <div class="container">
            <div id="login-row" class="row justify-content-center align-items-center">
                <div id="login-column" class="col-md-6">
                    <div id="login-box" class="col-md-12">
                        <br/>
           
                   <br/>
                                    <h3 class="text-center">Iniciar Sesión</h3>
                       <br/>
                            <div class="form-group">
                                <label for="correo">Usuario:</label><br/>
                                <input type="text" name="nombre" id="nombre" class="form-control" required/>
                            </div>
                            <div class="form-group">
                                <label for="password">Contraseña:</label><br/>
                                <input type="password" name="password" id="password" class="form-control" required/>
                                <input type="hidden" name="accion" value="acceso_user"/>
                            </div>
                            <div class="form-group">
                             <br/>
                    <center>
                                <input type="submit"class="btn btn-success" value="Ingresar"/>   
                                </center>
                        <form/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</body>
  
    );
}

export default Crud;


