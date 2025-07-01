// Espera que el usuario envíe el formulario
document.getElementById('triangleForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Evita que se recargue la página

  // Obtiene los valores de los lados y los convierte a número decimal
  const a = parseFloat(document.getElementById('ladoA').value);
  const b = parseFloat(document.getElementById('ladoB').value);
  const c = parseFloat(document.getElementById('ladoC').value);

  // Selecciona el div donde se mostrarán los resultados
  const textoResultados = document.getElementById('textoResultados');

  // Limpia los resultados anteriores (si los hay)
  textoResultados.innerHTML = '';

  // Verifica si los lados forman un triángulo válido (regla del triángulo)
  if (a + b > c && a + c > b && b + c > a) {

    // Calcula el perímetro y semiperímetro
    const p = a + b + c;
    const s = p / 2;

    // Calcula el área con la fórmula de Herón
    const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));

    // Calcula los ángulos internos usando ley del coseno
    const A = Math.acos((b*b + c*c - a*a) / (2*b*c)) * (180 / Math.PI);
    const B = Math.acos((a*a + c*c - b*b) / (2*a*c)) * (180 / Math.PI);
    const C = 180 - A - B; // El último ángulo se calcula por resta

    // Calcula las alturas desde cada lado
    const hA = (2 * area) / a;
    const hB = (2 * area) / b;
    const hC = (2 * area) / c;

    // Calcula las medianas desde cada vértice
    const mA = 0.5 * Math.sqrt(2*b*b + 2*c*c - a*a);
    const mB = 0.5 * Math.sqrt(2*a*a + 2*c*c - b*b);
    const mC = 0.5 * Math.sqrt(2*a*a + 2*b*b - c*c);

    // Calcula las bisectrices internas desde cada vértice
    const bisA = (2 / (b + c)) * Math.sqrt(b * c * s * (s - a));
    const bisB = (2 / (a + c)) * Math.sqrt(a * c * s * (s - b));
    const bisC = (2 / (a + b)) * Math.sqrt(a * b * s * (s - c));

    // Inserta todos los resultados dentro del contenedor HTML
    textoResultados.innerHTML = `

      <div class="result-box">
        <h3>✔️ Tri\xe1ngulo v\xe1lido</h3>
      </div>

      <div class="result-box">
        <h3>\xc1ngulos</h3>
        <p>\xc1ngulo α (a) = ${A.toFixed(2)}°</p>
        <p>\xc1ngulo β (b) = ${B.toFixed(2)}°</p>
        <p>\xc1ngulo γ (c) = ${C.toFixed(2)}°</p>
      </div>
	  

      <div class="result-box">
        <h3>Medianas</h3>
        <p>Mediana ma = ${mA.toFixed(2)}</p>
        <p>Mediana mb = ${mB.toFixed(2)}</p>
        <p>Mediana mc = ${mC.toFixed(2)}</p>
      </div>

      <div class="result-box">
        <h3>Bisectrices</h3>
        <p>Bisectriz ta = ${bisA.toFixed(2)}</p>
        <p>Bisectriz tb = ${bisB.toFixed(2)}</p>
        <p>Bisectriz tc = ${bisC.toFixed(2)}</p>
      </div>

      <div class="result-box">
        <h3>Alturas</h3>
        <p>Altura ha = ${hA.toFixed(2)}</p>
        <p>Altura hb = ${hB.toFixed(2)}</p>
        <p>Altura hc = ${hC.toFixed(2)}</p>
      </div>

      <div class="result-box">
        <h3>Per\xedmetro y \xc1rea</h3>
        <p>Per\xedmetro = ${p.toFixed(2)}</p>
        <p>\xc1rea = ${area.toFixed(2)}</p>
      </div>
    `;

  } else {
    // Si los lados no forman un triángulo, se muestra este mensaje
    textoResultados.innerHTML = `
      <p><strong>❌ Los lados no forman un tri\xe1ngulo v\xe1lido.</strong></p>
    `;
  }
});
