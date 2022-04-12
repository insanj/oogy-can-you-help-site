export var Cone;
(function (Cone) {
    let ConeTemplateTabContentAlignmentVertical;
    (function (ConeTemplateTabContentAlignmentVertical) {
        ConeTemplateTabContentAlignmentVertical["top"] = "top";
        ConeTemplateTabContentAlignmentVertical["center"] = "center";
        ConeTemplateTabContentAlignmentVertical["bottom"] = "bottom";
    })(ConeTemplateTabContentAlignmentVertical = Cone.ConeTemplateTabContentAlignmentVertical || (Cone.ConeTemplateTabContentAlignmentVertical = {}));
    let ConeTemplateTabContentAlignmentHorizontal;
    (function (ConeTemplateTabContentAlignmentHorizontal) {
        ConeTemplateTabContentAlignmentHorizontal["left"] = "left";
        ConeTemplateTabContentAlignmentHorizontal["center"] = "center";
        ConeTemplateTabContentAlignmentHorizontal["right"] = "right";
    })(ConeTemplateTabContentAlignmentHorizontal = Cone.ConeTemplateTabContentAlignmentHorizontal || (Cone.ConeTemplateTabContentAlignmentHorizontal = {}));
    Cone.kConeTemplateTabContentAlignmentDefault = "bottom-left";
    Cone.kConeTemplateTabContentDurationDefault = 3200;
    let ConeTemplateTabContentKind;
    (function (ConeTemplateTabContentKind) {
        ConeTemplateTabContentKind["jumbotron"] = "jumbotron";
        ConeTemplateTabContentKind["list"] = "list";
        ConeTemplateTabContentKind["styler"] = "styler";
    })(ConeTemplateTabContentKind = Cone.ConeTemplateTabContentKind || (Cone.ConeTemplateTabContentKind = {}));
    class ConeElement {
        constructor() {
            this.nodeType = "div";
            this.classList = [];
            this.id = "";
            this.innerText = "";
            this.onclick = "";
            this.onload = "";
            this._style = {};
            this.attributes = {};
            this.children = [];
        }
        get style() {
            return this._style;
        }
        set style(newValue) {
            this._style = Object.assign({}, newValue);
        }
        setAttribute(attribute, value) {
            this.attributes[attribute] = value;
        }
        appendChild(element) {
            this.children.push(element);
        }
        prepend(element) {
            this.children.unshift(element);
        }
        get outerHTML() {
            const tagName = this.nodeType;
            const idStr = this.id.length < 1 ? "" : ` id="${this.id}" `;
            const classStr = this.classList.length < 1 ? "" : ` class="${this.classList.join(" ")}"`;
            const encodedAttrs = Object.keys(this.attributes).map((attr) => {
                return ` ${attr}="${this.attributes[attr]}" `;
            });
            const attributesStr = encodedAttrs.join(" ");
            const childrenStr = this.children.length < 1
                ? ""
                : this.children.map((child) => child.outerHTML).join("");
            const styleKeys = Object.keys(this.style);
            const styleStr = styleKeys.length < 1
                ? ""
                : ` style="${styleKeys
                    .map((key) => `${key}:${this.style[key]};`)
                    .join("")}" `;
            const onclickStr = this.onclick.length < 1 ? "" : ` onclick="${this.onclick}" `;
            const onloadStr = this.onload.length < 1 ? "" : ` onload="${this.onload}" `;
            const encoded = `<${tagName}${idStr}${classStr}${attributesStr}${styleStr}${onclickStr}${onloadStr}>${this.innerText}${childrenStr}</${tagName}>`;
            return encoded;
        }
    }
    Cone.ConeElement = ConeElement;
    Cone.kConeStyleDefaultReference = {
        background: "#fff",
        color: "#2b154d",
    };
    class ConeStyleBuilder {
        constructor() {
            this.reference = Cone.kConeStyleDefaultReference;
        }
        get cone() {
            return {
                "font-family": "system-ui",
                position: "absolute",
                top: "0px",
                left: "0px",
                width: "100%",
                height: "100%",
                display: "flex",
                overflow: "hidden",
                "transform-origin": "center center",
                "background-color": this.reference.background,
                "animation": "delayedFade 1s ease-out forwards"
            };
        }
        get coneTabBarContainer() {
            return {
                position: "absolute",
                bottom: "0px",
                width: "100%",
                padding: "8px 0px 12px 0px",
                display: "flex",
                "align-items": "center",
                "justify-content": "center",
                "border-radius": "12px",
                "z-index": "3",
                background: this.reference.background,
            };
        }
        get coneTabBar() {
            return {
                background: this.reference.background,
                "font-weight": "500",
                padding: "10px",
                "border-radius": "12px",
                "box-shadow": "0px 1px 2px 1px rgba(0, 0, 0, 0.3)",
                "z-index": "3",
                display: "flex",
                gap: "10px",
                "user-select": "none",
            };
        }
        get coneTab() {
            return {
                padding: "5px 20px",
                border: `2px solid ${this.reference.color}`,
                "border-radius": "10px",
                cursor: "pointer",
                color: this.reference.color,
                "text-shadow": `0px 4px 40px ${this.reference.color}`,
                overflow: "hidden",
                "white-space": "pre",
                "box-shadow": "0px 1px 2px 2px rgb(0 0 0 / 15%)",
                "font-size": "18px",
                "line-height": "25px",
                "-webkit-tap-highlight-color": "transparent"
            };
        }
        get coneTabContentContainer() {
            return {
                position: "relative",
                width: "100%",
                height: "100%",
                "overflow-y": "hidden",
                "transform-origin": "center center",
                "background-color": this.reference.background,
            };
        }
        get coneTabContent() {
            return {
                color: this.reference.color,
                position: "relative",
                width: "100%",
                "min-height": "calc(100% - 70px)",
                "padding-bottom": "70px",
                display: "flex",
                "align-items": "center",
                "justify-content": "center",
                "overflow": "visible"
            };
        }
        get coneJumbotron() {
            return {
                position: "relative",
                padding: "20px 20px",
                "max-width": "100%",
                display: "flex",
                "flex-direction": "column",
                "align-items": "center",
                "justify-content": "center",
                "border-radius": "12px",
                background: "rgba(0,0,0,0.05)",
                "box-shadow": "inset 0px 0px 10px 0px rgb(0 0 0 / 20%)",
                animation: "fadeIn 0.6s ease-out"
            };
        }
        get coneJumbotronImg() {
            return {
                position: "relative",
                width: "calc(100% - 40px)",
                "max-width": "1080px",
                "min-width": "720px",
                height: "auto",
                "border-radius": "12px",
                "box-shadow": "0px 2px 10px 4px rgb(0 0 0 / 20%)",
                "aspect-ratio": "1920/1080"
            };
        }
        get coneJumbotronIFrame() {
            return {
                position: "relative",
                width: "calc(100% - 40px)",
                "max-width": "1080px",
                "min-width": "720px",
                height: "auto",
                "aspect-ratio": "1920/1080",
                "border-radius": "12px",
                "box-shadow": "0px 2px 10px 4px rgb(0 0 0 / 20%)",
                border: "none",
                "z-index": "3"
            };
        }
        get coneJumbotronH1() {
            return {
                margin: "0px",
                "z-index": "3"
            };
        }
        get coneJumbotronP() {
            return {
                margin: "0px",
                "white-space": "pre-line",
                "z-index": "3"
            };
        }
        get coneAlignableBox() {
            return {
                "z-index": "1",
                position: "relative",
                width: "calc(100% - 140px)",
                height: "calc(100% - 100px)",
                display: "flex",
                "flex-direction": "column",
                "min-width": "620px",
                "text-shadow": "-1px 2px 3px rgba(0,0,0,0.2)",
            };
        }
        get coneList() {
            return {
                position: "relative",
                padding: "20px 20px",
                "max-width": "100%",
                "min-width": "660px",
                display: "flex",
                "flex-direction": "column",
                "align-items": "center",
                "justify-content": "center",
                "border-radius": "12px",
                background: "rgba(0,0,0,0.05)",
                "box-shadow": "inset 0px 0px 10px 0px rgb(0 0 0 / 20%)",
                animation: "fadeIn 0.6s ease-out",
            };
        }
        get coneListItem() {
            return {
                "min-height": "45px",
                "min-width": "120px",
                padding: "20px",
                "box-shadow": "0px 2px 3px 2px rgb(0 0 0 / 20%)",
                margin: "10px 0px",
                "border-top-left-radius": "12px",
                "border-bottom-left-radius": "12px",
                "border-bottom-right-radius": "12px",
                cursor: "pointer",
                "background-color": this.reference.color,
                display: "flex",
                "align-items": "center",
                "justify-content": "center",
                "font-size": "20px",
                "z-index": "3"
            };
        }
        get coneListA() {
            return {
                margin: "0px",
                "white-space": "pre",
                padding: "20px",
                color: this.reference.color,
                "background-color": this.reference.background,
                "text-decoration": "none",
                "text-shadow": `-1px -1px 24px ${this.reference.color}`,
                border: `2px solid ${this.reference.background}`,
                "border-top-left-radius": "12px",
                "border-bottom-left-radius": "12px",
                "border-bottom-right-radius": "12px",
                "z-index": "3"
            };
        }
    }
    Cone.ConeStyleBuilder = ConeStyleBuilder;
    let ConeStyleClassName;
    (function (ConeStyleClassName) {
        ConeStyleClassName["tabBarContainer"] = "oogy-cone-tab-bar-container";
        ConeStyleClassName["tabContentContainer"] = "oogy-cone-tab-content-container";
        ConeStyleClassName["themeableColor"] = "oogy-cone-themeable-color";
        ConeStyleClassName["themeableColorInverse"] = "oogy-cone-themeable-color-inverse";
        ConeStyleClassName["themeableBackground"] = "oogy-cone-themeable-background";
        ConeStyleClassName["themeableBackgroundInverse"] = "oogy-cone-themeable-background-inverse";
        ConeStyleClassName["themeableBorder"] = "oogy-cone-themeable-border";
        ConeStyleClassName["themeableTextShadow"] = "oogy-cone-themeable-text-shadow";
    })(ConeStyleClassName = Cone.ConeStyleClassName || (Cone.ConeStyleClassName = {}));
    class ConeBuilder {
        static build(options) {
            return new ConeBuilder().build(options);
        }
        build(options) {
            var _a, _b;
            if (!options ||
                options == null ||
                options == undefined ||
                !options.template ||
                options.template == null ||
                options.template == undefined) {
                return "🍦 cone says: template not provided! I can't do anything";
            }
            const template = typeof options.template === "string"
                ? JSON.parse(options.template)
                : options.template;
            const styleBuilder = new ConeStyleBuilder();
            if (template.style) {
                styleBuilder.reference = template.style;
            }
            const container = new ConeElement();
            container.id = "oogy-cone";
            container.classList = [
                "oogy-cone",
                ConeStyleClassName.themeableBackground,
            ];
            container.style = styleBuilder.cone;
            const tabContentContainerElement = new ConeElement();
            tabContentContainerElement.id = ConeStyleClassName.tabContentContainer;
            tabContentContainerElement.classList = [
                ConeStyleClassName.tabContentContainer,
                ConeStyleClassName.themeableBackground,
            ];
            tabContentContainerElement.style = styleBuilder.coneTabContentContainer;
            container.appendChild(tabContentContainerElement);
            const tabBarContainerElement = new ConeElement();
            tabBarContainerElement.id = ConeStyleClassName.tabBarContainer;
            tabBarContainerElement.classList = [
                ConeStyleClassName.tabBarContainer,
                ConeStyleClassName.themeableBackground,
            ];
            tabBarContainerElement.style = styleBuilder.coneTabBarContainer;
            container.appendChild(tabBarContainerElement);
            const tabBarElement = this.buildTabBar(template.tabs.length);
            tabBarElement.classList = [
                "oogy-cone-tab-bar",
            ];
            tabBarElement.style = styleBuilder.coneTabBar;
            tabBarContainerElement.appendChild(tabBarElement);
            const selectedIdx = template.start !== undefined ? template.start : 0;
            let i = 0;
            const baseStyle = template.style
                ? template.style
                : Cone.kConeStyleDefaultReference;
            const baseColor = baseStyle.color
                ? baseStyle.color
                : Cone.kConeStyleDefaultReference.color;
            const baseBackground = baseStyle.background
                ? baseStyle.background
                : Cone.kConeStyleDefaultReference.background;
            for (let tab of template.tabs) {
                if (tab.content.kind === ConeTemplateTabContentKind.styler) {
                    const tabItemElement = this.buildTabItem(tab.title, tab.expanded ? tab.expanded : "");
                    tabItemElement.style = styleBuilder.coneTab;
                    const stylerColor = ((_a = tab.content.stylerStyle) === null || _a === void 0 ? void 0 : _a.color)
                        ? tab.content.stylerStyle.color
                        : baseColor;
                    const stylerBackground = ((_b = tab.content.stylerStyle) === null || _b === void 0 ? void 0 : _b.background)
                        ? tab.content.stylerStyle.background
                        : baseBackground;
                    tabItemElement.onclick = `
            const themeableColorEls = document.getElementsByClassName('${ConeStyleClassName.themeableColor}');
            const themeableColorInverseEls = document.getElementsByClassName('${ConeStyleClassName.themeableColorInverse}');

            const themeableBackgroundEls = document.getElementsByClassName('${ConeStyleClassName.themeableBackground}');
            const themeableBackgroundInverseEls = document.getElementsByClassName('${ConeStyleClassName.themeableBackgroundInverse}');

            const themeableBorderEls = document.getElementsByClassName('${ConeStyleClassName.themeableBorder}');
            const themeableTextShadowEls = document.getElementsByClassName('${ConeStyleClassName.themeableTextShadow}');

            if (this.hasAttribute('oogy-cone-selected')) {
              this.removeAttribute('oogy-cone-selected');

              for (let tc of themeableColorEls) { tc.style.color = '${baseColor}'; }
              for (let tc of themeableColorInverseEls) { tc.style.color = '${baseBackground}'; }

              for (let tc of themeableBackgroundEls) { tc.style['background-color'] = '${baseBackground}'; }
              for (let tc of themeableBackgroundInverseEls) { tc.style['background-color'] = '${baseColor}'; }

              for (let tc of themeableBorderEls) { tc.style['border-color'] = '${baseColor}'; }
              for (let tc of themeableTextShadowEls) { tc.style['text-shadow-color'] = '${baseColor}'; }
            } else {
              this.setAttribute('oogy-cone-selected', 'true');

              for (let tc of themeableColorEls) { tc.style.color = '${stylerColor}'; }
              for (let tc of themeableColorInverseEls) { tc.style.color = '${stylerBackground}'; }
                            
              for (let tc of themeableBackgroundEls) { tc.style['background-color'] = '${stylerBackground}'; }
              for (let tc of themeableBackgroundInverseEls) { tc.style['background-color'] = '${stylerColor}'; }

              for (let tc of themeableBorderEls) { tc.style['border-color'] = '${stylerColor}'; }
              for (let tc of themeableTextShadowEls) { tc.style['text-shadow-color'] = '${stylerColor}'; }
            }
          `
                        .trim()
                        .replace(/\n\s+/g, "");
                    tabBarElement.appendChild(tabItemElement);
                    i++;
                    continue;
                }
                const tabContentElement = this.buildTabContent(styleBuilder, tab.content);
                tabContentElement.classList = [
                    "oogy-cone-tab-content",
                    ConeStyleClassName.themeableColor,
                ];
                tabContentElement.id = `oogy-cone-tab-content-${i}`;
                tabContentElement.style = styleBuilder.coneTabContent;
                tabContentContainerElement.appendChild(tabContentElement);
                const tabItemElement = this.buildTabItem(tab.title, tab.expanded ? tab.expanded : "");
                tabItemElement.onclick = `
        for (let el of document.getElementsByClassName('${tabItemElement.classList[0]}')) {
          el.style['background-color'] = '${styleBuilder.reference.background}';
          el.style.color = '${styleBuilder.reference.color}';
        }
        
        this.style['background-color'] = '${styleBuilder.reference.color}';
        this.style.color = '${styleBuilder.reference.background}';

        for (let el of document.getElementsByClassName('${tabContentElement.classList[0]}')) {
          el.style.display = 'none';
        }

        const container = document.getElementById('${ConeStyleClassName.tabContentContainer}');
        container.style['overflow-y'] = 'hidden';
        console.log(container);

        const tabContentEl = document.getElementById('${tabContentElement.id}');

        const tempAnimHolder = tabContentEl.style.animation;
        tabContentEl.style.animation = '';
        tabContentEl.style.animation = tempAnimHolder;

        window.requestAnimationFrame(() => {
          tabContentEl.style.display = 'flex';
        });

        const animDur = 1200;
        const uuidExpectation = window.crypto.randomUUID();
        const expectAttrName = 'cone-overflow-expectation';
        container.setAttribute(expectAttrName, uuidExpectation);
        setTimeout(() => {
          const encodedExpectation = container.getAttribute(expectAttrName);
          if (encodedExpectation !== uuidExpectation) { return; }

          window.requestAnimationFrame(() => {
            container.style['overflow-y'] = 'scroll';
          });
        }, 1200);
        `
                    .trim()
                    .replace(/\n\s+/g, "");
                tabItemElement.style = styleBuilder.coneTab;
                if (i !== selectedIdx) {
                    tabContentElement.style.display = "none";
                }
                else {
                    tabItemElement.style["background-color"] =
                        styleBuilder.reference.color;
                    tabItemElement.style.color = styleBuilder.reference.background;
                }
                tabBarElement.appendChild(tabItemElement);
                i++;
            }
            const result = container.outerHTML;
            const animationKeyframesHTML = `<style class='oogy-cone-animations'>@keyframes fadeOut { 100% { opacity: 0.2; transform: scale(0.8, 0.8) translate(0, calc(100% + 80px));} } @keyframes fadeIn { 0% { opacity: 0.2; transform: scale(0.8, 0.8) translate(0, calc(100% + 80px)); background: transparent; border-radius: 0px; box-shadow: none; } } @keyframes carousel { 0% { filter: blur(2px) saturate(0%); opacity: 0; } }@keyframes carouselOut { 100% { opacity: 0; filter: saturate(0%); } }@keyframes delayedFade { 0% { opacity: 0; } 50% { opacity: 0; } 100% { opacity: 1.0; } } </style>`;
            const scaleJS = `
      <img 
        src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=' 
        style='display: none;' 
        onload="
        var cone_onResize = () => {
          const el = document.getElementById('${ConeStyleClassName.tabContentContainer}');
          const tabs = document.getElementsByClassName('oogy-cone-tab-expanded-text');
          const tabBarContainer = document.getElementById('${ConeStyleClassName.tabBarContainer}');

          if (window.innerWidth > 1080) {
            if (el.style.position === 'relative') { return; }
            
            el.style.position = 'relative';
            el.style.width = '100%';
            el.style.height = '100%';
            el.style.left = 'auto';
            el.style.top = 'auto';
            el.style.transform = 'none';

            tabBarContainer.style.width = '100%';
            tabBarContainer.style.height = '';
            tabBarContainer.style.transform = '';
            tabBarContainer.style.left = '';

            for (let tab of tabs) { 
              tab.style.display = '';
            }
          }
          else {
            const scale = Math.min(window.innerWidth/800, window.innerHeight/800);
            el.style.position = 'absolute';
            el.style.width = '800px';
            el.style.height = '800px';
            el.style.left = '50%';
            el.style.top = '50%';
            el.style.transform = 'translate(-50%, -50%) ' + 'scale(' + scale + ')';

            tabBarContainer.style.left = '50%';
            tabBarContainer.style.width = '370px';
            tabBarContainer.style.height = '60px';
            const tabScale = scale * 1.5;
            tabBarContainer.style.transform = 'translate(-50%, 0%) ' + 'scale(' + tabScale + ')';

            for (let tab of tabs) { 
              tab.style.display = 'none';
            }
          }
        };

        cone_onResize();
        setInterval(cone_onResize, 250);
        window.addEventListener('resize', (e) => { 
          cone_onResize();
        });
      " />`
                .trim()
                .replace(/\n\s+/g, "");
            let preloadLinkHTML = "";
            let imgSrcsToPreload = [];
            for (let tab of template.tabs) {
                if (tab.content.kind === ConeTemplateTabContentKind.styler ||
                    !tab.content.elements) {
                    continue;
                }
                for (let el of tab.content.elements) {
                    if (el.type === "img" && el.src) {
                        imgSrcsToPreload.push(el.src);
                    }
                }
            }
            if (imgSrcsToPreload.length > 0) {
                preloadLinkHTML = imgSrcsToPreload
                    .map((src) => `<link rel='preload' as='image' href='${src}' />`)
                    .join("");
            }
            let metaTagString = `<meta name='viewport' content='width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no'>`;
            const styleAndResult = `${metaTagString}${preloadLinkHTML}${animationKeyframesHTML}${result}${scaleJS}`;
            return styleAndResult;
        }
        buildTabBar(size) {
            const element = new ConeElement();
            element.classList = ["oogy-cone-tab-bar"];
            return element;
        }
        buildTabItem(title, expanded) {
            const element = new ConeElement();
            element.classList = [
                "oogy-cone-tab",
            ];
            element.innerText = title;
            const expandedElement = new ConeElement();
            expandedElement.nodeType = "span";
            expandedElement.classList = ["oogy-cone-tab-expanded-text"];
            if (expanded && expanded.length > 0) {
                expandedElement.innerText = `&nbsp;&nbsp;&nbsp;${expanded}`;
            }
            else {
                expandedElement.innerText = `&nbsp;`;
            }
            element.appendChild(expandedElement);
            return element;
        }
        buildTabContent(styleBuilder, content) {
            const container = new ConeElement();
            container.classList = ["oogy-cone-tab-content"];
            const contentElement = new ConeElement();
            container.appendChild(contentElement);
            const alignableTypes = ["h1", "p", "a"];
            const contentItemElementAlignableBox = new ConeElement();
            contentItemElementAlignableBox.classList = ["oogy-cone-alignable-box"];
            contentItemElementAlignableBox.style = styleBuilder.coneAlignableBox;
            switch (content.kind) {
                default:
                case ConeTemplateTabContentKind.jumbotron:
                    contentElement.classList = ["oogy-cone-jumbotron"];
                    contentElement.style = styleBuilder.coneJumbotron;
                    contentItemElementAlignableBox.style["position"] = "absolute";
                    break;
                case ConeTemplateTabContentKind.list:
                    contentElement.classList = ["oogy-cone-list"];
                    contentElement.style = styleBuilder.coneList;
                    break;
            }
            const contentAlign = !content.align
                ? Cone.kConeTemplateTabContentAlignmentDefault
                : content.align;
            let contentAlignParts = contentAlign.split("-");
            if (!contentAlignParts || contentAlignParts.length < 2) {
                contentAlignParts = Cone.kConeTemplateTabContentAlignmentDefault.split("-");
            }
            const verticalAlignStr = contentAlignParts[0];
            const horizontalAlignStr = contentAlignParts[1];
            switch (verticalAlignStr) {
                case ConeTemplateTabContentAlignmentVertical.top:
                    contentItemElementAlignableBox.style["justify-content"] =
                        "flex-start";
                    break;
                case ConeTemplateTabContentAlignmentVertical.center:
                    contentItemElementAlignableBox.style["justify-content"] = "center";
                    break;
                default:
                case ConeTemplateTabContentAlignmentVertical.bottom:
                    contentItemElementAlignableBox.style["justify-content"] = "flex-end";
                    break;
            }
            switch (horizontalAlignStr) {
                default:
                case ConeTemplateTabContentAlignmentHorizontal.left:
                    contentItemElementAlignableBox.style["text-align"] = "left";
                    contentItemElementAlignableBox.style["align-items"] = "flex-start";
                    break;
                case ConeTemplateTabContentAlignmentHorizontal.center:
                    contentItemElementAlignableBox.style["text-align"] = "center";
                    contentItemElementAlignableBox.style["align-items"] = "center";
                    break;
                case ConeTemplateTabContentAlignmentHorizontal.right:
                    contentItemElementAlignableBox.style["text-align"] = "right";
                    contentItemElementAlignableBox.style["align-items"] = "flex-end";
                    break;
            }
            contentElement.appendChild(contentItemElementAlignableBox);
            let imgIdx = 0;
            for (let contentItem of content.elements ? content.elements : []) {
                const contentItemElement = new ConeElement();
                contentItemElement.nodeType = contentItem.type;
                switch (contentItem.type) {
                    default:
                        break;
                    case "img":
                        if (contentItem.src === undefined) {
                            break;
                        }
                        contentItemElement.setAttribute("src", contentItem.src);
                        contentItemElement.style = styleBuilder.coneJumbotronImg;
                        contentItemElement.id = `oogy-cone-img-${imgIdx}`;
                        if (imgIdx > 0) {
                            contentItemElement.style["display"] = "none";
                        }
                        else {
                            const carouselDuration = content.duration !== undefined
                                ? content.duration
                                : Cone.kConeTemplateTabContentDurationDefault;
                            contentItemElement.onload = `
                const parentNode = this.parentNode;
                if (!parentNode && !parentNode.childNodes) { return; }

                const children = Array.from(parentNode.childNodes).filter(n => n.nodeName === 'IMG');
                if (children.length < 2) { return; }

                var cone_oncarousel = () => {
                  const showingIdx = children.findIndex(c => c.style.display !== 'none');
                  const nextIdx = showingIdx - 1 < 0 ?  children.length - 1 : showingIdx - 1;
                  const currEl = children[showingIdx], nextEl = children[nextIdx];

                  currEl.style.animation = 'carouselOut 0.5s ease-out forwards';

                  setTimeout(() => {
                    window.requestAnimationFrame(() => {
                      currEl.style.display = 'none';
                      nextEl.style.animation = 'carousel 1.5s ease-out forwards';
                      nextEl.style.display = '';
                    });
                  }, 500);
                };

                setInterval(() => { window.requestAnimationFrame(cone_oncarousel) }, ${carouselDuration + 500});
              `
                                .trim()
                                .replace(/\n\s+/g, "");
                        }
                        imgIdx++;
                        break;
                    case "iframe":
                        if (contentItem.src === undefined) {
                            break;
                        }
                        contentItemElement.setAttribute("src", contentItem.src);
                        contentItemElement.style = styleBuilder.coneJumbotronIFrame;
                        break;
                    case "h1":
                        contentItemElement.style = styleBuilder.coneJumbotronH1;
                        break;
                    case "p":
                        contentItemElement.style = styleBuilder.coneJumbotronP;
                        break;
                    case "a":
                        if (contentItem.href === undefined) {
                            break;
                        }
                        contentItemElement.setAttribute("href", contentItem.href);
                        contentItemElement.style = styleBuilder.coneListA;
                        contentItemElement.classList.push(ConeStyleClassName.themeableColor, ConeStyleClassName.themeableBackground, ConeStyleClassName.themeableTextShadow, ConeStyleClassName.themeableBorder);
                        break;
                }
                if (contentItem.text !== undefined) {
                    contentItemElement.innerText = contentItem.text;
                }
                if (contentItem.style !== undefined) {
                    const stylesToMerge = Object.keys(contentItem.style);
                    for (let styleKey of stylesToMerge) {
                        const value = contentItem.style[styleKey];
                        contentItemElement.style[styleKey] = value;
                    }
                }
                let elementToUse = contentItemElement;
                if (content.kind === ConeTemplateTabContentKind.list) {
                    elementToUse = new ConeElement();
                    elementToUse.classList = [
                        "oogy-cone-list-item",
                        ConeStyleClassName.themeableBackgroundInverse,
                    ];
                    elementToUse.style = styleBuilder.coneListItem;
                    elementToUse.appendChild(contentItemElement);
                }
                if (alignableTypes.includes(contentItem.type)) {
                    contentItemElementAlignableBox.appendChild(elementToUse);
                }
                else {
                    contentElement.prepend(elementToUse);
                }
            }
            return container;
        }
    }
    Cone.ConeBuilder = ConeBuilder;
})(Cone || (Cone = {}));
