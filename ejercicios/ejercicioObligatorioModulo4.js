
var express = require('express');
var app = express();


app.get('/preguntas',function(req,res){


res.send('<html><head><title>Preguntas</title></head>'
		+ '<body>'
		+ '<h2>Conteste las siguientes preguntas</h2>'
		+ '<form name="q_America" method="get" action="/respuesta">'
		+ '<label for="america">¿Quién descubrió América?</label>'
		+ '<input type="text" name="resp" placeholder="Escriba aquí la respuesta">'
		+ '<input type="hidden" name="n_pregunta" value="1">'
		+ '<input type="submit" value="Enviar"></form>'
		+ '<form name="q_Portugal" method="get" action="/respuesta">'
		+ '<label for="portugal">¿Capital de Portugal?</label>'
		+ '<input type="text" name="resp" placeholder="Escriba aquí la respuesta">'
		+ '<input type="hidden" name="n_pregunta" value="2">'
		+ '<input type="submit" value="Enviar"></form>'
		+ '</body></html>' );
});

app.get('/respuesta',function(req,res){

var resp ='<p>Su respuesta fue ' + req.query.resp + '</p>';

			if (req.query.n_pregunta === '1')  {
				
				if(req.query.resp === "Cristobal Colon") { 
						
					resp += '<p>Respuesta Correcta</p>';
				
				} else 
					{ 
						resp +='<p>Respuesta incorrecta, la respuesta correcta es Cristobal Colon</p>';
					}
			}
			else if (req.query.n_pregunta === '2') {
				
					if(req.query.resp === "Lisboa") {
				
					resp += '<p>Respuesta Correcta</p>';

			    	} else 
			    	{ 
			    		resp +='<p>Respuesta incorrecta, la respuesta correcta es Lisboa</p>';
			    	}
			}
	res.send(resp + '<a href="/preguntas">Volver a las preguntas</a>');

} );

app.get('*',function(req,res){

	var texto ="<p>Error pagina no encontrada</p>";

	res.send(texto + '<a href="/preguntas">Volver a las preguntas</a>');

});
app.listen(8000);
console.log('Puerto 8000');