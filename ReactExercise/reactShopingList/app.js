
const productList = [
    'apple',
    'bananna',
    'orange',
    'kiwi',
    'pineapple'
]


const elem = ""

const Header = () => {
    return (
        <header>
            <h1>
                This is my app name!
            </h1>

            <p>

                this is some text
          </p>

            <hr />

        </header>
    )
}


const Products = (props) => {


    for (let i = 0; i < props.product1.length; i++) {

        elem = props.product1[i]


    }
    return elem;

}


const ProductList = (props) => {



    return (
        <div>
            <h3>My Products</h3>
            <p>

                <Prouducts />

            </p>
        </div>
    )

}

// const Products = () => {
//     let elem = "";

//     for (let i = 0; i < productList.length; i++) {

//         elem = productList[i];

//     }
//     return elem;


// }
// console.log(Products())
// const element = <ProductList name={} />





const App = () => {

    return (
        <div>
            <Header />
            <ProductList product={productList} />
            <Products product1={productList} />
        </div>

    )
}



const rootElement = document.querySelector('.root')
ReactDOM.render(<App />, rootElement)