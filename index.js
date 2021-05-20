import './style.scss'
import data from './data.json'
import img1 from './src/images/1.jpg'
import img2 from './src/images/2.jpg'
import img3 from './src/images/3.jpg'
import img4 from './src/images/4.jpg'
import img5 from './src/images/5.jpg'
import img6 from './src/images/6.jpg'

const imgArr = [img1, img2, img3, img4, img5, img6]
const head = document.querySelector('head')
const breadcrumbs = document.querySelector('.breadcrumbs')
const navBar = document.querySelector('nav')
const stockItems = document.querySelector('.items')
const resultTitle = document.querySelector('.resultTitle')
const pageTxt = document.querySelector('.pageText')

const metaDesc = document.createElement('meta')
metaDesc.setAttribute('name', 'description')
metaDesc.setAttribute('content', data.page_meta.meta_description)
const metaKey = document.createElement('meta')
metaKey.setAttribute('name', 'keywords')
metaKey.setAttribute('content', data.page_meta.meta_keywords)
head.appendChild(metaDesc)
head.appendChild(metaKey)

data.nav.map(item => {
    const navLink = document.createElement('a')
    navLink.setAttribute('href', item.href)
    navLink.innerHTML = `${item.text}`
    navBar.appendChild(navLink)
})

data.breadcrumbs.map(item => {
    const crumb = document.createElement('a')
    crumb.setAttribute('href', item.href)
    crumb.innerHTML = `${item.text} >`
    breadcrumbs.appendChild(crumb)
})

resultTitle.innerHTML = `
    <h1>${data.page_meta.h1}<h1/>
    <h2>${data.page_meta.title}<h2/>
`

let i = 0
data.stock.map(item => {
    const stockItem = document.createElement('div')
    stockItem.classList.add('stockItem')
    stockItem.innerHTML = `
        <div class='imgBox'>
            <img src=${imgArr[i]} alt=${item.image}/>
        </div>
        <div class='description'>
            <h3><a href=${item.href}>${item.title}</a></h3>
            <div>
                <p>${item.make} ${item.model}</p>
                <p>${item.type}</p>
            </div>
            <div class='mainInfo'>
                <p>${item.year}</p>
                <p>${item.mileage} ${item.mileage_measure}</p>
                <p>${item.axle_configuration}</p>
                <p>${item.payload}</p>
                <p>${item.power} ${item.power_measure}</p>
            </div>
        </div>   
        <div>
            <h3 class='price'>${item.price} ${item.price_currency}</h3>
        </div>
    `
    stockItems.appendChild(stockItem)
    i++
})

data.page_text.map(item => {
    const para = document.createElement('p')
    para.innerHTML = `${item.content}`
    pageTxt.appendChild(para)
})