const CarritoCompra = require('../index');

/*
constructor(): Inicializa el carrito como un array vacío.

agregarProducto(producto): Recibe un objeto representando un producto y lo agrega al carrito.

calcularTotal(): Calcula el total de la compra sumando los precios de todos los productos en el carrito.

aplicarDescuento(porcentaje): Aplica un descuento al total de la compra según el porcentaje especificado. 
*/
describe("Pruebas a los métodos de la clase 'CarritoCompra'", () => {
    let carrito;

    beforeEach(() => {
        carrito = new CarritoCompra();
    });

    describe("Constructor", () => {
        it('Debería inicializar el carrito con una lista vacía de productos', () => {
            expect(carrito.productos).toEqual([]);
        });
    });

    describe("Agregar Producto", () => {
        it('Debería agregar un producto al carrito', () => {
            carrito.agregarProducto({nombre: 'Producto 1', precio: 100});
            expect(carrito.productos).toEqual([{nombre: 'Producto 1', precio: 100}]);
        });
    });

    describe("Calcular Total", () => {
        it('Debería calcular correctamente el total de los productos agregados', () => {
            carrito.agregarProducto({nombre: 'Producto 1', precio: 100});
            carrito.agregarProducto({nombre: 'Producto 2', precio: 200});
            expect(carrito.calcularTotal()).toEqual(300);
        });
    });

    describe("Aplicar Descuento", () => {
        it('Debería aplicar el descuento correctamente al total del carrito', () => {
            carrito.agregarProducto({nombre: 'Producto 1', precio: 100});
            carrito.agregarProducto({nombre: 'Producto 2', precio: 200});
            const totalConDescuento = carrito.aplicarDescuento(10);
            expect(totalConDescuento).toEqual(270);
        });
    });
});
