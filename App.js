import './App.css';
import Card from './card.js';
const Products =[
  {
    src:"https://ichef.bbci.co.uk/news/976/cpsprodpb/C448/production/_117684205_lotus.jpg",
    title:"Car1",
     productPrice:"$50,000",
     prodDes:"Best car ever very fast Best car ever very fast Best car ever very fast Best car ever very fast Best car ever very fast Best car ever very fastBest car ever very fast ",
  btnTxt:"Add to Cart"
    },
{
  src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7RsYRsoNvDPrfj3-kY_FXvbJ1ex0-W7Oymw&usqp=CAU",
  title:"Car2",
   productPrice:"$60,000",
   prodDes:"Best car ever very fast Best car ever very fast Best car ever very fast Best car ever very fast Best car ever very fast Best car ever very fastBest car ever very fast ",
btnTxt:"Add to Cart"
},
{
  src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRwBFQ7hlWmnK9m9IfwrmfZ78hvNalUEyWzA&usqp=CAU",
  title:"Car3",
   productPrice:"$70,000",
   prodDes:"Best car ever very fast Best car ever very fast Best car ever very fast Best car ever very fast Best car ever very fast Best car ever very fastBest car ever very fast ",
btnTxt:"Add to Cart"
},
{
  src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhlGp-iC4kipptXjYOyAu6SXBWSTrlpppACs2XgxqOXjvFeeAAvARDffG_uxVDKZ9xKNY&usqp=CAU",
  title:"Car4",
   productPrice:"$80,000",
   prodDes:"Best car ever very fast Best car ever very fast Best car ever very fast Best car ever very fast Best car ever very fast Best car ever very fastBest car ever very fast ",
btnTxt:"Add to Cart"
},
{
  src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3mpdsG8nuXqjYKW6cacjST22rClq4qqfoYA&usqp=CAU",
  title:"Car5",
   productPrice:"$90,000",
   prodDes:"Best car ever very fast Best car ever very fast Best car ever very fast Best car ever very fast Best car ever very fast Best car ever very fastBest car ever very fast ",
btnTxt:"Add to Cart"
},
{
  src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiALcsCF3jXcHHsfqSF5exjMQUGFGe4jx7ng&usqp=CAU",
  title:"Car6",
   productPrice:"$40,000",
   prodDes:"Best car ever very fast Best car ever very fast Best car ever very fast Best car ever very fast Best car ever very fast Best car ever very fastBest car ever very fast ",
btnTxt:"Add to Cart"
},
{
  src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIjzbDiwVVWL8naP3ANTSB1LTS6G4qSOsMcA&usqp=CAU",
  title:"Car7",
   productPrice:"$50,000",
   prodDes:"Best car ever very fast Best car ever very fast Best car ever very fast Best car ever very fast Best car ever very fast Best car ever very fastBest car ever very fast ",
btnTxt:"Add to Cart"
},
{
  src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVOAyQ9aUF0KR7CQilFy9WztU72RzvA4EMHw&usqp=CAU",
  title:"Car8",
   productPrice:"$50,000",
   prodDes:"Best car ever very fast Best car ever very fast Best car ever very fast Best car ever very fast Best car ever very fast Best car ever very fastBest car ever very fast ",
btnTxt:"Add to Cart"
},
{
  src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN-FRpvG-OcddlGXhuRJf3x7Jhud6egtNRSg&usqp=CAU",
  title:"Car9",
   productPrice:"$50,000",
   prodDes:"Best car ever very fast Best car ever very fast Best car ever very fast Best car ever very fast Best car ever very fast Best car ever very fastBest car ever very fast ",
btnTxt:"Add to Cart"
},
{
  src:"data:image/jpeg;base64,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",
  title:"Car10",
   productPrice:"$60,000",
   prodDes:"Best car ever very fast Best car ever very fast Best car ever very fast Best car ever very fast Best car ever very fast Best car ever very fastBest car ever very fast ",
btnTxt:"Add to Cart"
},
{
  src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk8nTBqTX-_rJYHI7JSVumIGD8NSpynoHGDQ&usqp=CAU",
  title:"Car11",
   productPrice:"$50,000",
   prodDes:"Best car ever very fast Best car ever very fast Best car ever very fast Best car ever very fast Best car ever very fast Best car ever very fastBest car ever very fast ",
btnTxt:"Add to Cart"
},
{
  src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbOhaD_PBS1KKGY-aRS-ZUeyG4Pb4VP6zysg&usqp=CAU",
  title:"Car12",
   productPrice:"$70,000",
   prodDes:"Best car ever very fast Best car ever very fast Best car ever very fast Best car ever very fast Best car ever very fast Best car ever very fastBest car ever very fast ",
btnTxt:"Add to Cart"
}

]
function App() {
  return (
    <div>
    <h1 style={{textAlign:"center",textDecoration:"underline", textTransform:"capitalize"}}>Dynamic card component</h1>
     {
Products.map((values)=>{
return(
  <div style={{ display:"inline-block"}}>
  <Card  image={values.src} ptitle={values.title} pPrice={values.productPrice} ptxt={values.prodDes} btn={values.btnTxt}  />
  </div>
)
}) 
  }
  </div>
  );
}

export default App;
