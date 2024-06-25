"use client";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";


export default function Home() {

  fetch("http://192.168.0.157:8000/books?page=1")
  .then(res => res.json())
  .then(data => {
    data.books.map((item,index) => {})
  });

  // const paramsString1 = "http://192.168.0.157:8000/books";
  // const searchParams1 = new URLSearchParams(paramsString1);

  // console.log(searchParams1.get(`http://192.168.0.157:8000/books/?page=1&page_size=10&name=${name}`));

  const searchParams = useSearchParams();
  // const [queryParams, setQueryParams] = useState([]);

  const handleSubmit = (e)=>{
    e.preventDefault();

    const book = e.target.book.value;
    console.log(book);
    const paramsString1 = `http://192.168.0.157:8000/books?page=1`;

    const searchParams1 = new URLSearchParams(paramsString1);
    console.log(searchParams.get(book))
    // console.log(searchParams1.get(`http://192.168.0.157:8000/books/?page=1&page_size=10&name=${book}`));
  }


  return (
    <div>
      <div>
        <form action="" onSubmit={handleSubmit}>
          <input type="text" placeholder="Search book name." name="book" />
          {/* <input type="text" name="" id="" /> */}
          <button type="submit">submit</button>
        </form>

      </div>
      <div>
        {

        }
      </div>
    </div>
  );
}
