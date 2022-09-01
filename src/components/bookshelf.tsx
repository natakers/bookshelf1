import React from "react"
import {
  AppState,
  useAppDispatch,
  useAppSelector,
} from '../store/store';


const Bookshelf = () => {
  const books = useAppSelector(
    (state: AppState) => state.book.books
  );
  const dispatch = useAppDispatch();
  return (
    <div className="bookshelf">
      <div className="shelf" id='0'>
        <div className="place" id="00" ></div>
        <div className="place" id="01"></div>
        <div className="place" id="02"></div>
        <div className="place" id="03"></div>
        <div className="place" id="04"></div>
        <div className="place" id="05"></div>
        <div className="place" id="06"></div>
        <div className="place" id="07"></div>
        <div className="place" id="08"></div>
        <div className="place" id="09"></div>
      </div>
      <div className="shelf" id='1'>
        <div className="place" id="10" ></div>
        <div className="place" id="11"></div>
        <div className="place" id="12"></div>
        <div className="place" id="13"></div>
        <div className="place" id="14"></div>
        <div className="place" id="15"></div>
        <div className="place" id="16"></div>
        <div className="place" id="17"></div>
        <div className="place" id="18"></div>
        <div className="place" id="19"></div>
      </div>
      <div className="shelf" id='2'>
        <div className="place" id="20"></div>
        <div className="place" id="21"></div>
        <div className="place" id="22"></div>
        <div className="place" id="23"></div>
        <div className="place" id="24"></div>
        <div className="place" id="25"></div>
        <div className="place" id="26"></div>
        <div className="place" id="27"></div>
        <div className="place" id="28"></div>
        <div className="place" id="29"></div>
      </div>
      <div className="shelf" id='3'>
        <div className="place" id="30" ></div>
        <div className="place" id="31"></div>
        <div className="place" id="32"></div>
        <div className="place" id="33"></div>
        <div className="place" id="34"></div>
        <div className="place" id="35"></div>
        <div className="place" id="36"></div>
        <div className="place" id="37"></div>
        <div className="place" id="38"></div>
        <div className="place" id="39"></div>
      </div>
    </div>
  )
}

export default Bookshelf