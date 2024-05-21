import React from 'react'
import "./productCard.scss"
import { calculateDiscountPrice } from '@/utils/helper'
import Image from 'next/image'
const ProductCard = ({ data }) => {
    return (
        <article class="card">
            <div class="card__img">
                <Image src={data.thumbnail} width="180" height="180" alt={data.title} />
            </div>
            <div class="card__name">
                <p>{data.title}</p>
            </div>
            <div class="card__precis">
                <a href="" class="card__icon" ><ion-icon name="heart-outline"></ion-icon></a>

                <div>
                    <span class="card__preci card__preci--before">$ {data.price}</span>
                    <span class="card__preci card__preci--now">$ {calculateDiscountPrice(data.price, data.discountPercentage)}</span>
                </div>
                <a href="" class="card__icon"><ion-icon name="cart-outline"></ion-icon></a>
            </div>
        </article>
    )
}

export default ProductCard
