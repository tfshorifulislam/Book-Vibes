import React, { use } from 'react';
import { BsListNested } from 'react-icons/bs';
import { FaStarHalfAlt } from "react-icons/fa";

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
                    books.map(book => <div key={book.bookId}>
                        <div className='border border-[#13131315] rounded-2xl p-6'>
                            <div className='bg-[#F3F3F3] rounded-2xl flex justify-center items-center py-8'>
                                <img className='h-50' src={book.image} alt="" />
                            </div>

                            <div className='flex gap-5'>
                                {book.tags.map(tag => <div>

                                    <div className='py-2 my-5 px-5  bg-[#23BE0A10] text-[#23BE0A] rounded-full'>
                                        {tag}
                                    </div>

                                </div>)}
                            </div>

                            <h1 className='text-[#131313] font-bold text-2xl playfair mb-4'>{book.bookName}</h1>
                            <p className='font-medium text-[#13131380]'>{book.author}</p>
                            <div className='border-t border-gray-400 opacity-30 my-4'></div>
                            <div className=' flex justify-between'>
                                <div className='text-[#13131380] font-medium'>{book.category}</div>
                                <div className='text-[#13131380] font-medium flex gap-2 items-center'>{book.rating} <FaStarHalfAlt /></div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default AllBooks;