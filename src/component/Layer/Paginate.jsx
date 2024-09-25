import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import ReactPaginate from 'react-paginate';
import Product from './Product';

// Example items, to simulate fetching from another resources.
// const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 5, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, ];




const Paginate = ({ itemsPerPage }) => {
    const [itemOffset, setItemOffset] = useState(0);
    const [items, setItems] = useState([]);

    useEffect(() => {

        const getData = async () => {
            try {
                const respones = await fetch('https://dummyjson.com/products')
                const data = await respones.json()
                setItems(data.products);
            } catch (error){
                console.error("Product not found", error);
            }
        }

        getData()

    }, [])



    const endOffset = itemOffset + itemsPerPage;
    const currentItems = items.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(items.length / itemsPerPage);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % items.length;
        setItemOffset(newOffset);
    };

    return (
        <>
            <div className='flex justify-between flex-wrap'>
                <Items currentItems={currentItems} />
            </div>

            <div className='flex justify-between items-end '>
                <ReactPaginate
                    breakLabel="..."
                    nextLabel=""
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={5}
                    pageCount={pageCount}
                    previousLabel=""
                    renderOnZeroPageCount={null}
                    pageclassName="page-item w-9 h-9  border border-[#767676] text-[#767676]"
                    pageLinkclassName="page-link inline-block w-full h-full  flex justify-center items-center "
                    containerclassName="pagination flex gap-x-3"
                    previousclassName="prev-item hidden"
                    nextclassName="next-item hidden"
                    activeclassName="active bg-black !text-white"
                />
                <p>{`Products from ${itemOffset + 1} to ${endOffset > items.length ? items.length : endOffset} of ${items.length}`}</p>
            </div>

        </>
    );
}



let Items = ({ currentItems }) => {
    return (
        <>
            {currentItems &&
                currentItems.map((item, index) => (
                    <Product key={index} src={item.thumbnail} brand={item.brand} productName={item.title} productPrice={item.price} />
                ))}
        </>
    );
}

export default Paginate