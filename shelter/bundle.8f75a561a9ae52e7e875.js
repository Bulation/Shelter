(()=>{"use strict";var e={};e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var t;e.g.importScripts&&(t=e.g.location+"");var n=e.g.document;if(!t&&n&&(n.currentScript&&(t=n.currentScript.src),!t)){var i=n.getElementsByTagName("script");i.length&&(t=i[i.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=t})(),(()=>{function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function i(e,t,i){return t&&n(e.prototype,t),i&&n(e,i),Object.defineProperty(e,"prototype",{writable:!1}),e}var o=function(){function e(){t(this,e),this.events={}}return i(e,[{key:"subscribe",value:function(e,t){this.events[e]||(this.events[e]=[]),this.events[e].push(t)}},{key:"unsubscribe",value:function(e,t){this.events[e]=this.events[e].filter((function(e){return t!==e}))}},{key:"emit",value:function(e,t){var n=this.events[e];n&&n.forEach((function(e){e.call(null,t)}))}}]),e}(),s=function(){function e(n,i,o,s){t(this,e),this.parent=n,this.node=document.createElement(i),this.node.className=o,this.node.textContent=s,n.append(this.node)}return i(e,[{key:"destroy",value:function(){this.node.remove()}}]),e}();function r(e,t){return r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},r(e,t)}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&r(e,t)}function d(e){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},d(e)}function c(e,t){if(t&&("object"===d(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function l(e){return l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},l(e)}var h=function(e){a(d,e);var n,o,r=(n=d,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=l(n);if(o){var i=l(this).constructor;e=Reflect.construct(t,arguments,i)}else e=t.apply(this,arguments);return c(this,e)});function d(e,n,i,o,a,c,l){var h;t(this,d),(h=r.call(this,e,n,i,o)).list=new s(h.node,"ul","navigation__list",""),h.listItems=[];for(var u=0;u<a;u+=1)h.listItems.push(new s(h.list.node,"li","navigation__item","")),h.listItems[u].link=new s(h.listItems[u].node,"a","navigation__link",c[u]),h.listItems[u].link.node.href=l[u];return h}return i(d,[{key:"addPetsClass",value:function(e){this.listItems[e].link.node.classList.add("navigation__link_active-pets"),this.listItems.forEach((function(e){e.link.node.classList.add("navigation__link_pets")}))}},{key:"removePetsClass",value:function(){this.listItems.forEach((function(e){e.link.node.classList.remove("navigation__link_pets"),e.link.node.classList.remove("navigation__link_active-pets")}))}},{key:"addActiveClass",value:function(e){this.listItems[e].link.node.classList.add("navigation__link_active")}},{key:"removeActiveClass",value:function(){this.listItems.forEach((function(e){e.link.node.classList.remove("navigation__link_active")}))}}]),d}(s);var u=function(e){a(d,e);var n,o,r=(n=d,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=l(n);if(o){var i=l(this).constructor;e=Reflect.construct(t,arguments,i)}else e=t.apply(this,arguments);return c(this,e)});function d(e,n,i,o,a){var c;return t(this,d),(c=r.call(this,e,n,i,o)).headerContainer=new s(c.node,"div","container header-container",""),c.containerLogo=new s(c.headerContainer.node,"a","logo",""),c.containerLogo.node.href="#",c.title=new s(c.containerLogo.node,"h1","logo__title","Cozy House"),c.subtitle=new s(c.containerLogo.node,"p","logo__subtitle","Shelter for pets in Boston"),c.navigation=new h(c.headerContainer.node,"nav","navigation ".concat(a),"",4,["About the shelter","Our pets","Help the shelter","Contacts"],["#index.html","#","#help","#footer"]),c.burger=new s(c.headerContainer.node,"div","burger",""),c.burgerItem=new s(c.burger.node,"span","burger__item",""),c.burger.node.onclick=function(){c.onBurger()},c.navigation.listItems.forEach((function(e){e.node.onclick=function(){c.burger.node.classList.contains("burger_active")&&c.onBurger()}})),c.parent.onclick=function(e){!e.target.closest(".navigation, .burger, .logo")&&c.parent.classList.contains("body_overlay")&&c.onBurger()},c.containerLogo.node.onclick=function(){c.burger.node.classList.contains("burger_active")&&c.onBurger()},window.addEventListener("resize",(function(){document.documentElement.clientWidth>=768&&c.burger.node.classList.contains("burger_active")&&c.onBurger()})),c}return i(d,[{key:"onBurger",value:function(){this.navigation.node.classList.toggle("navigation_burgered"),this.navigation.node.classList.contains("navigation_burgered")?this.navigation.node.classList.remove("navigation_inactive"):this.navigation.node.classList.add("navigation_inactive"),this.headerContainer.node.classList.toggle("header-container_burgered"),this.containerLogo.node.classList.toggle("logo_burgered"),this.parent.classList.toggle("body_overlay"),this.burger.node.classList.toggle("burger_active")}}]),d}(s);const f=e.p+"0cb054d241b5a1c651b2.png";var p=function(e){a(d,e);var n,o,r=(n=d,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=l(n);if(o){var i=l(this).constructor;e=Reflect.construct(t,arguments,i)}else e=t.apply(this,arguments);return c(this,e)});function d(e,n,i,o){var a;return t(this,d),(a=r.call(this,e,n,i,o)).node.id="footer",a.footerContainer=new s(a.node,"div","container footer-container",""),a.connection=new s(a.footerContainer.node,"div","connection",""),a.connectionTitle=new s(a.connection.node,"h3","section-title connection__title footer__title","For questions and suggestions"),a.contactsContainer=new s(a.connection.node,"address","contacts-container",""),a.contactsLinkFirst=new s(a.contactsContainer.node,"a","footer__link contacts-container__mail","email@shelter.com"),a.contactsLinkFirst.node.href="mailto:email@shelter.com",a.contactsLinkSecond=new s(a.contactsContainer.node,"a","footer__link contacts-container__phone","+13 674 567 75 54"),a.contactsLinkSecond.node.href="tel:+136745677554",a.address=new s(a.footerContainer.node,"div","address",""),a.addressTitle=new s(a.address.node,"h3","section-title address__title footer__title","We are waiting for your visit"),a.locationsContainer=new s(a.address.node,"address","locations-container",""),a.locationFirst=new s(a.locationsContainer.node,"a","footer__link locations-container__location","1 Central Street, Boston (entrance from the store)"),a.locationFirst.node.href="https://goo.gl/maps/tuQYr1CWrdTqHMfe6",a.locationSecond=new s(a.locationsContainer.node,"a","footer__link locations-container__location locations-container__london","18 South Park, London"),a.locationSecond.node.href="https://goo.gl/maps/EjZwZZmJ36Jxsec96",a.footerPetWrapper=new s(a.footerContainer.node,"div","footer-pet",""),a.footerPetImg=new s(a.footerPetWrapper.node,"img","footer-pet__img",""),a.footerPetImg.node.src=f,a.footerPetImg.node.alt="Yellow dog shows its tongue",a}return i(d)}(s);const m=e.p+"e36eb69780f9ced90752.png",g=e.p+"ed5f000ebf808011f798.png",_=e.p+"9926a26c4cb1dd4bf18c.png",v=e.p+"fadecb22388434dc910b.png",w=e.p+"4827f66b7085eb65087f.png",y=e.p+"f28b802b95a1fcf49f0d.png",b=e.p+"ced4e399a51c4183f125.png",k=e.p+"642d228764da438f2cef.png";var C=function(e){a(d,e);var n,o,r=(n=d,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=l(n);if(o){var i=l(this).constructor;e=Reflect.construct(t,arguments,i)}else e=t.apply(this,arguments);return c(this,e)});function d(e,n,i,o,s,a,c,l){var h;return t(this,d),(h=r.call(this,e,n,i,o)).names=a,h.alt=c,h.ourPetsClass=l,h.pathToImg=[g,m,_,w,y,b,k,v],h.friendsItems=[],h.count=s,document.documentElement.clientWidth<=600?h.pushItems(0,h.count-5):document.documentElement.clientWidth<768?h.pushItems(0,h.count-3):h.pushItems(0,h.count),window.addEventListener("resize",(function(){if(document.documentElement.clientWidth<=768&&window.location.pathname.endsWith("our-pets")&&8===h.friendsItems.length){var e=h.friendsItems;e[e.length-2].destroy(),e[e.length-1].destroy(),h.friendsItems=h.friendsItems.slice(0,-2)}if(document.documentElement.clientWidth<=600&&window.location.pathname.endsWith("our-pets")&&6===h.friendsItems.length){var t=h.friendsItems;t[t.length-3].destroy(),t[t.length-2].destroy(),t[t.length-1].destroy(),h.friendsItems=h.friendsItems.slice(0,-3)}document.documentElement.clientWidth>600&&window.location.pathname.endsWith("our-pets")&&3===h.friendsItems.length&&h.pushItems(3,6),document.documentElement.clientWidth>768&&window.location.pathname.endsWith("our-pets")&&6===h.friendsItems.length&&h.pushItems(6,8)})),h}return i(d,[{key:"pushItems",value:function(e,t){for(var n=e;n<t;n+=1){var i=new s(this.node,"div","friends-slider-pet ".concat(this.ourPetsClass),""),o=new s(i.node,"div","friends-slider-pet__img-container",""),r=new s(o.node,"img","friends-slider-pet__img","");r.node.src=this.pathToImg[n],r.node.alt=this.alt[n],new s(i.node,"h4","friends-slider-pet__name",this.names[n]),new s(i.node,"a","btn friends-slider-pet__btn","Learn more"),this.friendsItems.push(i)}}}]),d}(s);const I=e.p+"870ad62967208038b537.png",L=e.p+"4fa8b404c14190e526f6.png",O=e.p+"2fd63e1369cbb6bd00fc.png";var T=function(){function e(n){var i=this;t(this,e),this.node=n,this.header=new u(this.node,"header","header",""),this.header.navigation.addActiveClass(0),this.header.navigation.listItems[1].link.node.onclick=function(){i.onOurPets("our-pets")},this.main=new s(this.node,"main","",""),this.notOnly=new s(this.main.node,"section","not-only",""),this.notOnlyContainer=new s(this.notOnly.node,"div","container not-only-container",""),this.notOnlyDescription=new s(this.notOnlyContainer.node,"div","not-only__description",""),this.notOnlyTitle=new s(this.notOnlyDescription.node,"h2","not-only__title","Not only people need a house"),this.notOnlyText=new s(this.notOnlyDescription.node,"p","not-only__text","We offer to give a chance to a little and nice puppy with an extremely wide and open heart. He or she will love you more than anybody else in the world, you will see!"),this.notOnlyBtn=new s(this.notOnlyDescription.node,"a","btn not-only__btn","Make a friend"),this.notOnlyBtn.node.href="#friends",this.notOnlyImgContainer=new s(this.notOnlyContainer.node,"div","not-only__img-container",""),this.notOnlyImg=new s(this.notOnlyImgContainer.node,"img","not-only__pet-img",""),this.notOnlyImg.node.src=I,this.notOnlyImg.node.alt="White dog with red ears",this.about=new s(this.main.node,"section","about",""),this.aboutContainer=new s(this.about.node,"div","container about-container",""),this.aboutImgContainer=new s(this.aboutContainer.node,"div","about__img-container",""),this.aboutImg=new s(this.aboutImgContainer.node,"img","about__pets-img",""),this.aboutImg.node.src=L,this.aboutImg.node.alt="Grey cat and white dog",this.aboutDescription=new s(this.aboutContainer.node,"div","about__description",""),this.aboutTitle=new s(this.aboutDescription.node,"h3","section-title about__title","About the shelter “Cozy House”"),this.aboutTextFirst=new s(this.aboutDescription.node,"p","about__text about__text_mb-25","Currently we have 121 dogs and 342 cats on our hands and statistics show that only 20% of them will find a family. The others will continue to live with us and will be waiting for a lucky chance to become dearly loved."),this.aboutTextSecond=new s(this.aboutDescription.node,"p","about__text","We feed our wards with the best food and make sure that they do not get sick, feel comfortable (including psychologically) and well. We are supported by 87 volunteers and 28 employees of various skill levels. About 12% of the animals are taken by the shelter staff. Taking care of the animals, they become attached to the pets and would hardly ever leave them alone."),this.friends=new s(this.main.node,"section","friends",""),this.friends.node.id="friends",this.friendsContainer=new s(this.friends.node,"div","friends-container",""),this.friendsTitle=new s(this.friendsContainer.node,"h3","section-title friends__title",""),this.friendsTitleSpan=new s(this.friendsTitle.node,"span","friends__title-part","Our friends who "),this.friendsTitle.node.innerHTML+="are looking for a house",this.friendsSlider=new s(this.friendsContainer.node,"div","friends-slider",""),this.arrowLeftWrapper=new s(this.friendsSlider.node,"div","friends-slider__arrow-wrapper",""),this.arrowLeft=new s(this.arrowLeftWrapper.node,"span","friends-slider__arrow friends-slider__arrow_left",""),this.friendsSliderContainer=new s(this.friendsSlider.node,"div","friends-slider-container",""),this.friendsSliderItems=new C(this.friendsSliderContainer.node,"div","friends-slider-items","",3,["Katrine","Jennifer","Woody"],["Grey cat with black eyes","White small dog with yellow ears and black eyes","Yellow medium dog"]),this.arrowRightWrapper=new s(this.friendsSlider.node,"div","friends-slider__arrow-wrapper",""),this.arrowRight=new s(this.arrowRightWrapper.node,"span","friends-slider__arrow friends-slider__arrow_right",""),this.friendsLink=new s(this.friendsContainer.node,"a","btn friends__btn","Get to know the rest"),this.friendsLink.node.href="#",this.friendsLink.node.onclick=function(){return i.onOurPets("our-pets")},this.help=new s(this.main.node,"section","help",""),this.help.node.id="help",this.helpContainer=new s(this.help.node,"div","help-container",""),this.helpTitle=new s(this.helpContainer.node,"h3","section-title help__title","How you can help our shelter"),this.helpItemsContainer=new s(this.helpContainer.node,"div","help-items-container",""),this.helpItems=[],this.helpTitles=["Pet food","Transportation","Toys","Bowls and cups","Shampoos","Vitamins","Medicines","Collars / leashes","Sleeping areas"],this.iconsClassnames=["help-item__icon-food","help-item__icon-transportation","help-item__icon-toy","help-item__icon-cup","help-item__icon-shampoo","help-item__icon-vitamin","help-item__icon-medicines","help-item__icon-collars","help-item__icon-sleeping-area"];for(var o=0;o<9;o+=1){var r=new s(this.helpItemsContainer.node,"div","help-item","");new s(r.node,"div","help-item__icon ".concat(this.iconsClassnames[o]),""),new s(r.node,"h4","help-item__name",this.helpTitles[o]),this.helpItems.push(r)}this.donate=new s(this.main.node,"section","donate",""),this.donateContainer=new s(this.donate.node,"div","container donate-container",""),this.donatePetWrapper=new s(this.donateContainer.node,"div","donate-pet",""),this.donatePetImg=new s(this.donatePetWrapper.node,"img","donate-pet__img",""),this.donatePetImg.node.src=O,this.donatePetImg.node.alt="Yellow dog with black eyes lies",this.donateDescription=new s(this.donateContainer.node,"div","donate__description",""),this.donateTitle=new s(this.donateDescription.node,"h3","section-title donate__title","You can also make a donation"),this.donateSubtitle=new s(this.donateDescription.node,"h5","donate__text","Name of the bank / Type of bank account"),this.donateLink=new s(this.donateDescription.node,"a","donate__link","8380 2880 8028 8791 7435"),this.donateLink.node.href="#",this.donateInfo=new s(this.donateDescription.node,"p","donate__info","Legal information and lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas a ipsum at libero sagittis dignissim sed ac diam. Praesent ultrices maximus tortor et vulputate. Interdum et malesuada fames ac ante ipsum primis in faucibus."),this.footer=new p(this.node,"footer","footer","")}return i(e,[{key:"destroy",value:function(){this.header.node.remove(),this.main.node.remove(),this.footer.node.remove()}}]),e}(),P=function(){function e(n){var i=this;t(this,e),this.node=n,this.header=new u(this.node,"header","header","","our-pets-navigation"),this.header.navigation.addPetsClass(1),this.header.navigation.addActiveClass(1),this.header.node.classList.add("our-pets-header"),this.header.headerContainer.node.classList.add("our-pets-header-container"),this.header.title.node.classList.add("our-pets-logo__title"),this.header.subtitle.node.classList.add("our-pets-logo__subtitle"),this.header.containerLogo.node.href="./#",this.header.navigation.listItems[0].link.node.onclick=function(){i.onMainPage("")},this.header.navigation.listItems[2].link.node.onclick=function(){i.onMainPage("#help")},this.main=new s(this.node,"main","",""),this.friends=new s(this.main.node,"section","friends",""),this.friends.node.id="friends",this.friendsContainer=new s(this.friends.node,"div","friends-container our-pets-friends-container",""),this.friendsTitle=new s(this.friendsContainer.node,"h3","section-title friends__title",""),this.friendsTitleSpan=new s(this.friendsTitle.node,"span","friends__title-part","Our friends who "),this.friendsTitle.node.innerHTML+="are looking for a house",this.friendsSlider=new s(this.friendsContainer.node,"div","friends-slider our-pets-slider",""),this.friendsSliderItems=new C(this.friendsSlider.node,"div","friends-slider-items our-pets-friends-slider-items","",8,["Katrine","Jennifer","Woody","Sophia","Timmy","Charly","Scarlett","Freddie"],["Grey cat with black eyes","White small dog with yellow ears and black eyes","Yellow medium dog","White small dog with black ears on hand","Grey cat","White dog lies","White small dog with yellow ears","Grey cat"],"our-pets-friends-slider-item"),this.paginationWrapper=new s(this.friendsContainer.node,"div","friends-pagination-wrapper",""),this.pagination=new s(this.paginationWrapper.node,"div","friends-pagination",""),this.paginationItemFirst=new s(this.pagination.node,"div","friends-pagination__item friends-pagination__item_back","<<"),this.paginationItemSecond=new s(this.pagination.node,"div","friends-pagination__item friends-pagination__item_back","<"),this.paginationItemThird=new s(this.pagination.node,"div","friends-pagination__item friends-pagination__item_active","1"),this.paginationItemFourth=new s(this.pagination.node,"div","friends-pagination__item friends-pagination__item_up",">"),this.paginationItemFifth=new s(this.pagination.node,"div","friends-pagination__item friends-pagination__item_up",">>"),this.footer=new p(this.node,"footer","footer","")}return i(e,[{key:"destroy",value:function(){this.header.node.remove(),this.main.node.remove(),this.footer.node.remove()}}]),e}();new(function(){function e(n){var i=this;t(this,e),this.node=n,this.mainCycle(),this.emitter=new o,this.emitter.subscribe("",(function(){i.main.destroy(),i.mainCycle()})),this.emitter.subscribe("our-pets",(function(){i.main.destroy(),i.petsCycle()}))}return i(e,[{key:"mainCycle",value:function(){var e=this;this.main=new T(this.node),this.main.onOurPets=function(t){e.main.destroy(),e.onNavigate(t,{page:"/our-pets"})}}},{key:"petsCycle",value:function(){var e=this;this.main=new P(this.node),this.main.onMainPage=function(t){e.main.destroy(),e.onNavigate(t,{page:"/"})}}},{key:"onNavigate",value:function(e,t){var n=this;window.history.pushState(t,e,"./".concat(e)),window.onpopstate=function(){var e=window.location.pathname.split("/");n.emitter.emit(e[e.length-1])}}}]),e}())(document.body)})()})();