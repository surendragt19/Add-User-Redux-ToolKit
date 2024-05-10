import React from 'react'
import styled from "styled-components";
import RemoveAall from './RemoveAall';
import { fakeData } from '../api';
import {useDispatch, useSelector} from 'react-redux'
import { AddUsers, dropUser, removeUser } from '../store/slice/UserSlice';

const AddUserDetails = () => {
//dispatch
const dispatch=useDispatch();

//Add
const addNewUser=(name)=>{
dispatch(AddUsers(name))
}

//display data
const data=useSelector((state)=>{{
  return state.users;
}})
console.log(data)

//delete
const deleteUser=(id)=>{
  dispatch(removeUser(id))
}

//remove
const RemoveAall=()=>{
  dispatch(dropUser())
}
  return (
    <>
        <Wrapper>
      <div className="content">
        <div className="admin-table">
          <div className="admin-subtitle">List of User Details</div>
          <button className="btn add-btn" onClick={()=>addNewUser(fakeData())}>+</button>
        </div>
        <ul>
        {
          data.map((ele,id)=>{
            return(<>
              <div key={id}style={{display:'flex',justifyContent:'space-between',margin:'8px'}}>
              <li key={id} className='dataText'>{ele.name}</li>
              <a className='fa fa-trash text2' onClick={()=>deleteUser(id)}></a>
              </div>
              <hr/>
              </>
            )
          })
        }
        </ul>
        <br/>
       
       <button className='delete' onClick={()=>RemoveAall()}>Remove ALL</button>

      </div>
    </Wrapper>
    </>
  )
}
const Wrapper = styled.section`
  margin: 1rem 3.2rem;

  .content ul {
    list-style-type: none !important;
    display: flex;
    flex-direction: column;
  }

  h3 {
    margin: 0;
  }

  .admin-table {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 4rem 0;
  }

  .admin-subtitle {
    font-size: 3.2rem;
    color:black;
  }

  .delete-btn {
    background-color: red;
    border: none;
  }
  @media screen and (max-width: 998px) {
    .admin-subtitle {
      margin-bottom: 1.6rem;
    }
  }
`;

export default AddUserDetails