import { BASE_URL } from "./lib";

export function loaddingHome() {
    $.ajax({
        url: `${BASE_URL}/home/homepage?kind=homepages`,
        success(res) {
            console.log(res);
            let { images } = res;
            let homeHtmlStr = "";
            $.each(images, (_, obj) => {
                homeHtmlStr += `<li>
                    <a href="${obj.homelink}" style="background:url(${BASE_URL}/images/index/${obj.imgName}) no-repeat" class="second-homelink">
                        <p>${obj.hometext}</p>
                    </a>
                </li>`;
            });
            $(".second-list").html(homeHtmlStr);
        }
    })
}
/*
export function loaddingFlash() {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: `${BASE_URL}/other/images?kind=slides`,
            success(res) {
                let htmlStr = "";
                $.each(res, (index, imgname) => {
                    htmlStr += `<div class="swiper-slide">
                        <img src="${BASE_URL}/images/${imgname}">
                    </div>`;
                })
                $(".swiper-wrapper").html(htmlStr);
                resolve();
            }
        })
    })
}

export function loaddingBanner() {
    // 1. 请求数据
    $.ajax({
        url: `${BASE_URL}/other/images?kind=banner`,
        success(res) {
            console.log(res);
            let {icons, promos} = res;
            let iconHtmlStr = "", promoHtmlStr = "";
            $.each(icons, (_, obj) => {
                iconHtmlStr += `<figure>
                    <img src="${BASE_URL}/images/${obj.imgName}">
                    <figcaption>${obj.text}</figcaption>
                </figure>`;
            });
            $.each(promos, (_, imganme) => {
                promoHtmlStr += `<img src="${BASE_URL}/images/${imganme}">`
            })
            $(".icons").html(iconHtmlStr);
            $(".promos").html(promoHtmlStr);
        }
    })
}


export function loaddingPhone() {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: `${BASE_URL}/other/goods?kind=phone`,
            success(res) {
                $(".phone").html(`
                    <h1 class="title">${res.title}</h1>
                    <div class="container">
                        <img class="promo" src="${BASE_URL}/images/${res.promo}">
                        ${(function() {
                            let htmlStr = "";
                            $.each(res.contentlist, (_, goods) => {
                                htmlStr += `<section class="box">
                                    <img src="${BASE_URL}/images/${goods.imageName}">
                                    <p class="name">${goods.name}</p>
                                    <p class="desc">${goods.desc}</p>
                                    <p class="price">
                                        <span>${goods.price}元</span>
                                        <del>${goods.originPrice}元</del>
                                    </p>
                                </section>`
                            })
                            return htmlStr;
                        })()}
                        <div class="banner">
                            <img src="${BASE_URL}/images/${res.banner}" />
                        </div>
                    </div>
                `);
                resolve(res.contentlist);
            }
        })
    })
}
*/