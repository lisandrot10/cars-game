"# cars-game" 
### Descripción:

- Desarrolla una función llamada `iniciarCarrera` que simule una carrera entre dos carros: un carro rojo y un carro azul.
- Cada carro comenzará en el extremo derecho de una pista de 50 unidades de longitud.
- En cada turno de la carrera, cada carro avanzará una distancia aleatoria entre 0 y 3 posiciones hacia la izquierda.
- La carrera terminará cuando uno o ambos carros lleguen al inicio de la pista (posición 0).
- Deberás imprimir el estado de cada pista después de cada movimiento para visualizar la carrera.
- Al final de la carrera, debes determinar y anunciar cuál de los carros ganó o si hubo un empate.

### Requerimientos:

1. La pista de cada carro debe representarse como una línea de 50 caracteres donde cada posición libre se indica con ``.
2. El carro rojo se representará con el emoji `🚗` y el carro azul con `🚙`.
3. Los carros deben moverse de derecha a izquierda empezando desde la posición 49 (asumiendo que la primera posición es 0).
4. Usa `console.log` para imprimir el estado de la pista después de cada movimiento.
5. Determina el ganador basado en qué carro llegue primero al inicio de la pista o declara un empate si ambos llegan al mismo tiempo.

### Notas Adicionales:

- Utiliza funciones para organizar el código, como `dibujarPista` para manejar la visualización de la pista.
- Implementa el avance de los carros mediante números aleatorios para simular variabilidad en la carrera.
- Considera escenarios donde ambos carros podrían terminar la carrera en el mismo turno para manejar correctamente el empate.