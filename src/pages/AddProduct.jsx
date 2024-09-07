import React from 'react'
import Navbar from '../components/Navbar'
import { useState } from 'react'
import { sendToast } from '../utils/common'
import { BeatLoader } from 'react-spinners'

const AddProduct = () => {
    const [prodName, setProdName] = useState("")
    const [prodType, setProdType] = useState("")
    const [price, setPrice] = useState(0);
    const [quantity, setQuantity] = useState(0)
    const [brand, setBrand] = useState("");
    const [image, setImage] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const product = { prodName, prodType, price, quantity, brand }
        const formData = new FormData();
        formData.append('file', image);
        formData.append('prod', new Blob([JSON.stringify(product)], { type: 'application/json' }));
        let response = await fetch('http://localhost:9000/products/createProduct', {
            method: "POST",
            body: formData
        })
        response = await response.json()
        if (response.status === 1) {
            setProdName("");
            setProdType("");
            setPrice(0);
            setQuantity(0);
            setBrand("");
            setImage(null);
            setLoading(false);
            return sendToast(response.response)
        }
        return sendToast(response.response)
    }

    return (
        <div className="flex items-center justify-center h-screen w-full">
            <Navbar />
            <section className="flex mt-10 flex-col gap-5 border-[1px] p-7 border-gray-400  rounded-md">
                <h1 className="text-2xl">Add new product</h1>
                <input type="text" disabled={loading} value={prodName} onChange={(e) => setProdName(e.target.value)} placeholder="Product name" className="outline-none border-b-[1px] border-gray-400 pb-2" />
                <select disabled={loading} value={prodType} onChange={(e) => setProdType(e.target.value)}>
                    <option value="" disabled>Select type</option>
                    <option value="ios">ios</option>
                    <option value="android">android</option>
                    <option value="basic">basic</option>
                </select>
                <select disabled={loading} value={brand} onChange={(e) => setBrand(e.target.value)}>
                    <option value="" disabled>Select brand</option>
                    <option value="samsung">samsung</option>
                    <option value="apple">apple</option>
                    <option value="nokia">nokia</option>
                    <option value="oppo">oppo</option>
                    <option value="vivo">vivo</option>
                    <option value="poco">poco</option>
                </select>
                <input disabled={loading} type="number" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Price" className="outline-none border-b-[1px] border-gray-400 pb-2" />
                <input disabled={loading} type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} placeholder="Quantity" className="outline-none border-b-[1px] border-gray-400 pb-2" />
                <input disabled={loading} type="file" placeholder="Image" name="image" onChange={(e) => setImage(e.target.files[0])} />
                <button disabled={loading} onClick={handleSubmit} className="bg-amber-500 py-2 rounded-md font-semibold uppercase">
                    {loading ? <BeatLoader /> : 'Post'}
                </button>
            </section>
        </div >
    )
}

export default AddProduct