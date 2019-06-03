import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

    
//     <div class="ui inverted orange menu">
//     <a class='item'>
//       <h2 class="ui header">
//         <i class="paw icon"></i>
//         <div class="content">
//           ZooKeepr
//         </div>
//       </h2>
//     </a>
//   </div>




// const text=(title,color,icon)=>{
//     return React.createElement('div',{className: `ui inverted ${color} menu`},[
//         React.createElement('a',{className:"item"},
//             React.createElement('h2',{className:'ui header'},[
//                 React.createElement('i',{className:`${icon} icon `}),
//                 React.createElement('div',{className:"content"},title)
//                 ]
//             )
//         ),
//     ])
// }

const Text=(props)=>{
    console.log(props)
    return(
    
    <div className={`ui inverted ${props.title} menu`}>
        <a class='item'>
          <h2 class="ui header">
            <i class="paw icon"></i>
            <div class="content">
              ZooKeepr
            </div>
          </h2>
        </a>
      </div>
        
        )
}


const Beans=()=>{
    return(
        <div>
            
            <Text title="040119" desc="houston SE"/>
        </div>
        )
}


ReactDOM.render(
    <Beans/>,
    document.getElementById('root')
    );
