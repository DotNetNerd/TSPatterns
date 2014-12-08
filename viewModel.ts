/*
Encapsulates a viewmodel
Enabled two-way binding between model and DOM
*/

module ViewModel {
    export function bind(obj, property, domElement) {
        Object.defineProperty(obj, property, {
            get: () => domElement.value,
            set: newValue => { domElement.value = newValue; },
            configurable: true
        });
    }

    export function bindArray(obj, property, domElement, renderFunction)
    {
        Object.defineProperty(obj, property, {
            get: () => {
                return JSON.parse(domElement.getAttribute("data-products") || "[]");
            },
            set: newValue => {
                domElement.setAttribute("data-products", JSON.stringify(newValue));
                domElement.innerHTML = renderFunction(newValue);
            },
            configurable: true
        });
    }

    export class ProductViewModel {
        name: string
        price: number
        products: ProductViewModel[]
    }
}

var vm = new ViewModel.ProductViewModel();
vm.products = [];
ViewModel.bind(vm, 'name', document.querySelector('.productName'));
ViewModel.bind(vm, 'price', document.querySelector('.productPrice'));

vm.name = "Candle";
vm.price = 100;

ViewModel.bindArray(vm, 'products', document.querySelector(".productList"), (newValue) => newValue.map(e => "<li>" + e.name + " (" + e.price + ")" + "</li>").join(" "));

document.querySelector('.addProductButton').addEventListener("click", () => {
    var newProduct = new ViewModel.ProductViewModel();
    newProduct.name = vm.name;
    newProduct.price = vm.price;
    vm.products = vm.products.concat([newProduct]);
});