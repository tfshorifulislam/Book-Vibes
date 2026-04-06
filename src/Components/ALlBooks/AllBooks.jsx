import React, { use } from 'react';
import AllCards from '../../Ui/AllCards';

const booksPromise = fetch('/booksData.json').then(res => res.json())

const AllBooks = () => {
    const books = use(booksPromise)
    console.log(books)
    return (
        <div className='w-11/12 mx-auto'>
            <div className='flex justify-center mt-24'>
                <h1 className='mb-9 font-bold playfair text-4xl text-[#131313]'>Books</h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3  gap-5'>
                {
                    books.map(book => <AllCards book={book} />)
                }
            </div>
        </div>
    );
};

export default AllBooks;