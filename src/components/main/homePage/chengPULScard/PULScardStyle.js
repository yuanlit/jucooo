import styled from "styled-components"



const PulsCard = styled.div`
width:100vw;
overflow:hidden;
.head_nav{
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 1.17333rem;
    line-height: 1.17333rem;
    text-align: center;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    border-bottom: 1px solid #ebebeb;
    background-color: #fefefe;
    z-index: 100;
}
.head_nav .head_icon.back_icon{
    left: 0;
   
    background-size: .53333rem .53333rem;
}
.head_nav .head_icon{
    position: absolute;
    top: 0;
    display: inline-block;
    width: 1.33333rem;
    height: 100%;
}
.head_nav .title{
    font-size: .48rem;
    font-weight: 400;
    color: #232323;
    padding: 0 1.33333rem;
}
/* ------ */
.plus-privileges {
    position: relative;
    width: 10rem;
    height: 13.736rem;
    margin: 0 auto;
    margin-top: 1.08267rem;
}
.plus-content .active {
    margin-top: 1.87733rem;
}
.plus-content .plus-row {
    width: 13.71733rem;
    margin: 0 auto;
    padding-top: 0.21333rem;
}
.plus-content .plus-noPurchase {
    width: 100%;
    background-size: 100%;
}
.plus-content .plus-row .plus-cardShape {
    margin: 0 auto;
}
.plus-content .plus-row .plus-cardShape .row-readyText {
    color: #fff;
    padding-left: 0.62667rem;
    padding-top: 0.4rem;
}
.plus-content .plus-row .plus-cardShape .row-readyText .cardType {
    display: flex;
    justify-content: space-between;
}
.plus-content .plus-row .plus-cardShape .row-readyText .cardType .cardTxt {
    width: 5.80267rem;
    height: 1.32267rem;
}
.plus-content .plus-row .plus-cardShape .row-readyText .cardType .value-card {
    width: 1.536rem;
    color: #bfb28a;
    margin-left: -2.77333rem;
    display: inline-block;
    background: #333;
    height: 0.68267rem;
    margin-top:0.14133rem;
    width: 1.536rem;
    line-height: 0.68267rem;
    background-color: rgba(0, 0, 0, 0.1);
    border-radius: 0.08533rem;
}
.plus-content .plus-row .plus-ruleBg {
    cursor: pointer;
    margin-right: 0.45rem;
}
a {
    text-decoration: none;
    color: inherit;
}
.plus-content .plus-row .plus-ruleBg .plus-rule {
    text-align: center;
    display: flex;
    justify-content: flex-end;
    color: #d8c9a3;
}
.plus-content .plus-row .plus-ruleBg .plus-rule span {
    background-color: #656563;
    padding: 0.21333rem 0.42667rem 0.21333rem 0.42667rem;
    border-radius: 0.85333rem 0 0 0.85333rem;
    color: #d8c9a3;
}
.plus-content .plus-row .plus-cardShape .row-readyText .card-noPurchase {
    margin-top:0.34rem !important;
    color: #d8c9a3;
    overflow: hidden;
}
.plus-content .plus-row .plus-cardShape .row-readyText .card-noPurchase .noPurchase-txt2 {
    font-size: 0.5333rem;
    color: #f7e9be;
    padding-left: 0.17067rem;
    float: left;
}
.plus-content .plus-row .plus-cardShape .row-readyText .card-noPurchase .noPurchase-txt {
    font-size: 0.12rem;
    color: #9f9578;
    padding-left: 0.17067rem;
    float: right;
    margin-top:0.22rem;
    padding-right: 0.64rem;
}
.plus-content .plus-row .plus-cardShape .row-readyText .card-noPurchase .noPurchase-txt .card-discount {
    font-size: 0.39733rem;
    font-weight: 700;
    color: #f0e0ae;
}

/* ----- */
.privileges-title {
    text-align: center;
    padding-top:0.9333rem;
    position: relative;
}
.privileges-title div {
    text-align: center;
    width: 5.14133rem;
    height: 0.66133rem;
    margin: 0 auto;
    font-size:0.48267rem;
    line-height: 0.66133rem;
    color: #d5a370;
    font-weight: 700;
}
.privileges-title .Out-ruleBg {
    position: absolute;
    right: 0.4333rem;
    bottom: -0.21333rem;
    text-decoration: underline;
    z-index: 10;
    line-height: 1.06667rem;
    color: #808080;
    font-size: 0.3973333333rem
}

/* ----- */
.plus-privileges .privileges-showLists {
    width: 100%;
    margin: 0 auto;
    cursor: pointer;
    padding-bottom: 0.68267rem;
    padding-top: 0.21333rem;
}
.plus-privileges .privileges-showLists .showLists-frame {
    width: 100%;
    margin: 0 auto;
    overflow: hidden;
    display: flex;
    flex-wrap: wrap;
}
.plus-privileges .privileges-showLists .showLists {
    width: 25%;
    margin-top: 0.64rem;
    text-align: center;
    color: #000;
}
.plus-privileges .privileges-showLists .showLists img {
    width: 1.23733rem;
    height: 0.8133rem;
    vertical-align: middle;
    text-align: center;
}
img {
    border: none;
    max-width: 100%;
    outline: none;
}
.plus-privileges .privileges-showLists .showLists .privilegeC-txtAdd {
    font-size: 0.05467rem;
    color: #1a1a1a;
}
.plus-privileges .privileges-showLists .showLists .privilegeC-txt {
    font-size: 0.02667rem;
    color: #999999;
}

/* ----- */
.plus-content .plus-row2 .plus-privilege {
    width: 95%;
    margin: 0 auto;
    height: 2.304rem;
    position: relative;
    z-index: 30;
}

.plus-content .p-txt {
    position: relative;
}
.plus-content .p-txt .rtxt {
    text-align: center;
}
.plus-content .p-txt .rtxt .ptxt {
    font-size: 0.39733rem;
    color: #85470e;
    line-height: 0.8rem;
    font-weight: bold;
}
.plus-content .p-txt .rtxt .ptxt2 {
    font-size: 0.2667rem;
    color: #fff;
    line-height: 0.512rem;
}
.plus-content .plus-row2 .plus-tipBand p {
    text-align: center;
}

/* ------ */
/* flex 比例 */
@keyframes cardLine {
  0% {
    opacity: 0;
    transform-origin: left center;
    transform: translate3D(-100%, 0, 0); }
  100% {
    opacity: 1;
    transform: translate3D(100%, 0, 0); } }

.plus-content .plus-row2 .plus-privilege .card_line {
    width: 100%;
    position: absolute;
    top: 0;
    z-index: 6;
    animation: cardLine 3.6s .6s linear infinite;
    }
.plus-content .plus-row2 .plus-privilege .card_line .icon_cardLine {
    width: 2.00533rem;
    height: auto;
}


/* ---- */
.js-exclusive-coupon {
    margin-top: 0;
    border-radius: 0;
}
.zxlist{
    margin:0 auto;
    padding-top: 0.3rem;
    padding-bottom: 0.5rem;
    display:flex;
    i{
        line-height: 1.06667rem;
        margin-right:0.3rem
    }
}
.freeView-txt{
    flex:1;
    font-size: 0.5333rem;
    color: #1a1a1a;
    line-height: 1.06667rem;
    font-weight: bold;
    display:inline-block;
    margin-left:0.2rem
}


/* ---- */
.swiper-container {
        width: 100%;
        height: 100%;
    }
    .swiper-slide {
        text-align: center;
        font-size: 18px;
        background: #fff;

        /* Center slide text vertically */
        display: -webkit-box;
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;
    }


    /* ---- */
    .swiper-container1 {
        width: 100%;
        height: auto;
        margin-left: auto;
        margin-right: auto;
    }
    .swiper-slide {
        text-align: center;
        font-size: 18px;
        background: #fff;
        height: 200px;
        
        /* Center slide text vertically */
        display: -webkit-box;
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;
    }
 .coupon-card {
    position: relative;
    display: block;
    width: 95%;
    height: 100%;
    overflow: hidden;
    text-align: center;
}
.coupon-card .coupon_icon {
    position: relative;
}
.coupon-card .coupon_icon .common_icon.vip_icon {
    width: 0.49067rem;
    height: 0.448rem;
}
 .coupon-card .coupon-cnt {
    height: 100%;
    padding:0 4.13867rem 0.85333rem 0;
}
.coupon-card .coupon-cnt .c-discount {
    color: #d4a36f;
    overflow: hidden;
    word-break: break-all;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.coupon-card .coupon-cnt .c-discount .c-sym {
    font-size: 0.12rem;
}
.coupon-card .coupon-cnt .c-discount .c-num {
    font-size: 0.6rem;
    font-weight: bold;
}
.coupon-card .coupon-cnt .c-discount .c-condition {
    font-size: 0.2667rem;
}
.coupon-card .coupon-cnt .c-limit {
    font-size: 0.1rem;
    font-weight: bold;
    color: #594025;
    margin-top: 0.2667rem;
    margin-bottom: 0.24133rem;
    overflow: hidden;
    word-break: break-all;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.coupon-card .coupon-cnt .c-time {
    font-size: 0.1rem;
    color: #808080;
    overflow: hidden;
    word-break: break-all;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.coupon-card .coupon-receive {
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    width: 4.13867rem;
    font-size: 0.512rem;
    color: #d4a36f;
}
.coupon-card .coupon-receive a {
    display: block;
    margin: 0.77067rem auto 0;
    width: 1.98667rem;
    height: 0.93867rem;
    line-height: 0.93867rem;
    border-radius: 0.46933rem;
    border: solid 1px #d4a36f;
}

/* ---- */
.swiper-slide .zspp .tour {
    position: relative;
    display: block;
    width: 5.168rem;
    height: 3.26667rem;
    border-radius: 0.17067rem;
    overflow: hidden;
    font-size: 0.72533rem;
}
.swiper-slide .zspp {
    width: 100%;
    height: 4.26667rem;
}
.swiper-slide .zspp .tour .tour_pic {
    border-radius: 0.17067rem;
    display:block;
    width: 100%;
    height:100%;
    z-index:99999;
}
.swiper-slide .zspp .tour-txt {
    color: #232323;
    width: 5.168rem;
    overflow: hidden;
    word-break: break-all;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.js-ticket2{
    height: 3.26667rem;
}
.swiper-slide-active{
    width: 5.168rem;
    height: 3.26667rem;
}

/* ----- */
.pre-buyAgain {
    background-color: #fff;
    border-radius: 0.21333rem;
    margin-top: 0.512rem;
    padding-bottom: 0.5333rem;
}
.pre-buyAgain .swiperCard {
    width: 100%;
    height: 100%;
    padding-bottom: 1.06667rem;
}
.pre-buyAgain .swiperCard .Atour {
    display: block;
    width: 8.72rem;
    height: 4.08267rem;
    position: relative;
    overflow: hidden;
    display: flex;
    background-color: #f5f5f5;
    border-radius: 0.17067rem;
    padding: 0.64rem;
}
.pre-buyAgain .swiperCard .Atour .Atour-bg {
    width: 4.26667rem;
    height: 3.824rem;
}
.pre-buyAgain .swiperCard .Atour .Atour-bg .Atour_pic {
    -o-border-radius: 0.08533rem 0 0 0.08533rem;
    border-radius: 0.08533rem 0 0 0.08533rem;
    width: 100%;
    height: 100%;
    vertical-align: middle;
}
.pre-buyAgain .swiperCard .Atour .Aposter-ctn {
    width: 8.53333rem;
    margin-left: 0.64rem;
}
.pre-buyAgain .swiperCard .Atour .Aposter-ctn .Aposter-time {
    font-weight: bold;
    font-size: 0.4rem;
    color: #232323;
    overflow: hidden;
    word-break: break-all;
    text-overflow: ellipsis;
    white-space: nowrap;
    position: relative;
    text-align: left;
}
.pre-buyAgain .swiperCard .Atour .Aposter-ctn .Aposter-time .Aposter-week {
    font-size: 0.12rem;
    color: #666666;
}
.pre-buyAgain .swiperCard .Atour .Aposter-ctn .Aposter-name {
    margin: 0.62rem 0;
    color: #1a1a1a;
    font-size: 0.33rem;
    font-weight: bold;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    text-align: left;
}
.pre-buyAgain .swiperCard .Atour .Aposter-ctn .Aposter-address {
    color: #666666;
    font-size: 0.12rem;
    overflow: hidden;
    word-break: break-all;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-align: left;
}
.pre-buyAgain .swiperCard .Atour .Aposter-ctn .timeSet {
    position: relative;
}
.pre-buyAgain .swiperCard .Atour .Aposter-ctn .timeSet .Aposter-name2 {
    color: #ff6743;
    font-size: 0.4rem;
    margin: 0.6rem 0 0;
    text-align: left;
}
.pre-buyAgain .swiperCard .Atour .Aposter-ctn .timeSet .Aposter-name2 .sub {
    font-size: 0.23rem;
    color: #999;
}
.pre-buyAgain .swiperCard .Atour .Aposter-ctn .timeSet .Aposter-time2 {
    position: absolute;
    right: 0;
    bottom: 0;
    color: #666666;
    font-size: 0.12rem;
}
.pre-buyAgain .swiperCard .Atour .Aposter-ctn .timeSet .Aposter-time2 span {
    color: #666666;
}
.yxxp{
    height: 5.26667rem;
    width:8rem
}

/* ----- */
.mfgy{
}
.poster-ctn {
    width: 2.56533rem;
}

.poster-ctn .poster-name {
    color: #232323;
    padding: 0 0.17067rem;
    font-size: 0.2533rem;
    font-weight: bold;
    overflow: hidden;
    word-break: break-all;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.swiper-slide .zspp .tour1 {
    position: relative;
    display: block;
    width: 2.168rem;
    height: 3.26667rem;
    border-radius: 0.17067rem;
    overflow: hidden;
    font-size: 0.72533rem;
}
.swiper-container3 {
        width: 100%;
        height: 300px;
        margin: 20px auto;
    }
    .swiper-slide {
        text-align: center;
        font-size: 18px;
        background: #fff;
        
        /* Center slide text vertically */
        display: -webkit-box;
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;
    }
    /* ---- */
.zxzk{
    margin-bottom:1.5rem;
}

.swiperCard3 {
    overflow: hidden;
    margin-right: -0.64rem;
}
.swiperCard3 .js-member2 {
    width: 3rem;
    float: left;
    margin-right: 0.49067rem;
    margin-bottom: 1.06667rem;
}
.swiperCard3 .js-member2 .tour {
    display: block;
}
.swiperCard3 .js-member2 .tour .mExclusive-bg {
    position: relative;
    width: 2.8667rem;
    height: 4.25067rem;
    overflow: hidden;
}
.swiperCard3 .js-member2 .tour .tour_pic {
    display: block;
    width: 4.58667rem;
    height: 6.25067rem;
    border-radius: 0.17067rem;
}

.swiperCard3 .js-member2 .tour .buy_icon {
    position: absolute;
    top: 0.21333rem;
    left: 0.21333rem;
    width: 1.2rem;
    height: 0.4667rem;
    line-height: 0.4667rem;
    background-color: #ffffff;
    border-radius: 0.08533rem;
    color: #ff6743;
    font-size: 0.3rem;
    text-align: center;
}

.swiperCard3 .js-member2 .poster-ctn .mExclusive-name {
    padding: 0.61867rem 0 0.42667rem;
    overflow: hidden;
    word-break: break-all;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: #232323;
    font-size: 0.33rem;
    font-weight: bold;
}
.swiperCard3 .js-member2 .poster-ctn .poster-price {
    font-size: 0.47rem;
    color: #ff6743;
    font-weight: bold;
}
.swiperCard3 .js-member2 .poster-ctn .poster-price .sub {
    color: #999999;
    font-size: 0.3rem;
    font-weight: normal;
}

.zxzk .exclusive-more {
    text-align: center;
}

.zxzk .exclusive-more .exclusive-more-btn {
    display: inline-block;
    width: 6.80533rem;
    height: 1.55733rem;
    line-height: 1.55733rem;
    border-radius: 0.17067rem;
    border: solid 1px #cf8846;
    font-size: 0.64rem;
    color: #cf8846;
    cursor: pointer;
}





`





export default PulsCard