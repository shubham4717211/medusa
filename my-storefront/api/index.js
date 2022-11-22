var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_react = require("@remix-run/react"), import_server = require("react-dom/server"), import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let markup = (0, import_server.renderToString)(
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react.RemixServer, {
      context: remixContext,
      url: request.url
    }, void 0, !1, {
      fileName: "app/entry.server.tsx",
      lineNumber: 12,
      columnNumber: 5
    }, this)
  );
  return responseHeaders.set("Content-Type", "text/html"), new Response("<!DOCTYPE html>" + markup, {
    headers: responseHeaders,
    status: responseStatusCode
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  meta: () => meta
});
var import_react4 = require("@remix-run/react"), import_medusa_react2 = require("medusa-react"), import_react_hot_toast = require("react-hot-toast");

// app/components/outletContainer.tsx
var import_medusa_react = require("medusa-react"), import_react2 = require("react");

// app/lib/config.ts
var import_medusa_js = __toESM(require("@medusajs/medusa-js")), import_react_query = require("react-query"), MEDUSA_BACKEND_URL = "http://localhost:9000", STRAPI_API_URL = "http://127.0.0.1:1337/api", queryClient = new import_react_query.QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: !1,
      staleTime: 1e3 * 60 * 60 * 24,
      retry: 1
    }
  }
}), medusaClient = new import_medusa_js.default({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 });

// app/components/outletContainer.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function OutletContainer({ children }) {
  let { setCart } = (0, import_medusa_react.useCart)();
  return (0, import_react2.useEffect)(() => {
    let localCartId = localStorage.getItem("cart_id");
    localCartId ? medusaClient.carts.retrieve(localCartId).then(({ cart }) => {
      setCart(cart);
    }) : medusaClient.carts.create().then(({ cart }) => {
      localStorage.setItem("cart_id", cart.id), setCart(cart);
    });
  }, []), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    children
  }, void 0, !1, {
    fileName: "app/components/outletContainer.tsx",
    lineNumber: 24,
    columnNumber: 10
  }, this);
}

// app/components/topNavigator.tsx
var import_react3 = require("@remix-run/react"), import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function TopNavigator() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", {
    className: "flex w-screen fixed top-0 right-0 left-0 items-center py-4 flex-row justify-between px-10 sm:px-20 md:px-44 z-10 bg-black",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react3.Link, {
        to: "/",
        className: "text-xl",
        children: "MRS"
      }, void 0, !1, {
        fileName: "app/components/topNavigator.tsx",
        lineNumber: 6,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react3.Link, {
        to: "/cart",
        children: "Cart"
      }, void 0, !1, {
        fileName: "app/components/topNavigator.tsx",
        lineNumber: 9,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/components/topNavigator.tsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

// app/styles/app.css
var app_default = "/build/_assets/app-L7MC3XD4.css";

// app/root.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), links = () => [{ rel: "stylesheet", href: app_default }], meta = () => ({
  charset: "utf-8",
  title: "Remix Medusa Storefront",
  viewport: "width=device-width,initial-scale=1"
});
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("html", {
    lang: "en",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("head", {
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react4.Meta, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 34,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react4.Links, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 35,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/root.tsx",
        lineNumber: 33,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("body", {
        className: "bg-black text-slate-400 overflow-x-hidden justify-center flex",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_medusa_react2.MedusaProvider, {
          queryClientProviderProps: { client: queryClient },
          baseUrl: MEDUSA_BACKEND_URL,
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_medusa_react2.CartProvider, {
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(OutletContainer, {
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TopNavigator, {}, void 0, !1, {
                    fileName: "app/root.tsx",
                    lineNumber: 44,
                    columnNumber: 15
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react4.Outlet, {}, void 0, !1, {
                    fileName: "app/root.tsx",
                    lineNumber: 45,
                    columnNumber: 15
                  }, this)
                ]
              }, void 0, !0, {
                fileName: "app/root.tsx",
                lineNumber: 43,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react4.ScrollRestoration, {}, void 0, !1, {
                fileName: "app/root.tsx",
                lineNumber: 47,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react4.Scripts, {}, void 0, !1, {
                fileName: "app/root.tsx",
                lineNumber: 48,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react4.LiveReload, {}, void 0, !1, {
                fileName: "app/root.tsx",
                lineNumber: 49,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_hot_toast.Toaster, {}, void 0, !1, {
                fileName: "app/root.tsx",
                lineNumber: 50,
                columnNumber: 13
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/root.tsx",
            lineNumber: 42,
            columnNumber: 11
          }, this)
        }, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 38,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 37,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 32,
    columnNumber: 5
  }, this);
}

// app/routes/products/$slug.tsx
var slug_exports = {};
__export(slug_exports, {
  default: () => ProductSlug
});
var import_react5 = require("@remix-run/react"), import_medusa_react4 = require("medusa-react"), import_react_hot_toast2 = __toESM(require("react-hot-toast"));

// app/lib/formatPrice.ts
var import_medusa_react3 = require("medusa-react"), formatPrice = (variant, cart) => {
  if (cart)
    return (0, import_medusa_react3.formatVariantPrice)({
      variant,
      region: cart.region
    });
};

// app/routes/products/$slug.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function ProductSlug() {
  let { slug } = (0, import_react5.useParams)(), { products } = (0, import_medusa_react4.useProducts)(
    {
      handle: slug
    },
    {}
  ), { cart } = (0, import_medusa_react4.useCart)(), { mutate, isLoading } = (0, import_medusa_react4.useCreateLineItem)(cart == null ? void 0 : cart.id), addItem = () => {
    mutate(
      {
        variant_id: products == null ? void 0 : products.slice(0, 1)[0].variants[0].id,
        quantity: 1
      },
      {
        onSuccess: () => {
          (0, import_react_hot_toast2.default)("Added to Cart!");
        }
      }
    );
  };
  if (!products || !cart)
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {}, void 0, !1, {
      fileName: "app/routes/products/$slug.tsx",
      lineNumber: 36,
      columnNumber: 12
    }, this);
  let product = products[0];
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "flex flex-col items-center lg:justify-between lg:flex-row px-10 pb-44 sm:px-20 md:px-44 pt-44 max-w-[100rem] flex-grow w-screen",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
        src: product.thumbnail,
        className: "h-96 w-auto"
      }, void 0, !1, {
        fileName: "app/routes/products/$slug.tsx",
        lineNumber: 42,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
            className: "text-4xl pt-5 lg:pt-0 pb-5 lg:pb-10 text-white",
            children: product.title
          }, void 0, !1, {
            fileName: "app/routes/products/$slug.tsx",
            lineNumber: 44,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
            className: "w-72",
            children: product.description
          }, void 0, !1, {
            fileName: "app/routes/products/$slug.tsx",
            lineNumber: 47,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
            className: "text-xl text-white pt-5",
            children: formatPrice(product.variants[0], cart)
          }, void 0, !1, {
            fileName: "app/routes/products/$slug.tsx",
            lineNumber: 48,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
            className: "p-5 rounded-md w-full bg-slate-400 bg-opacity-25 mt-10 cursor-pointer active:scale-95 transition ease-in-out duration-75",
            onClick: () => addItem(),
            children: "Add item"
          }, void 0, !1, {
            fileName: "app/routes/products/$slug.tsx",
            lineNumber: 51,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/routes/products/$slug.tsx",
        lineNumber: 43,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/routes/products/$slug.tsx",
    lineNumber: 41,
    columnNumber: 5
  }, this);
}

// app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index,
  loader: () => loader
});
var import_react7 = require("@remix-run/react");

// app/models/home.server.ts
var getHomePageData = async () => {
  let homePage = await (await fetch(`${STRAPI_API_URL}/home-page?populate=*`)).json(), { data } = homePage, { attributes } = data, heroText = attributes.hero_text, products = attributes.products_list.data, smallHeading = attributes.heading_2;
  return { heroText, products, smallHeading };
};

// app/components/productCard.tsx
var import_react6 = require("@remix-run/react"), import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function ProductCard({ image, title, handle }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react6.Link, {
    to: `/products/${handle}`,
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
      className: "flex flex-col space-y-1 p-2 hover:bg-slate-400 hover:bg-opacity-25 cursor-pointer active:scale-95 transition ease-in-out duration-75",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
          src: image,
          alt: ""
        }, void 0, !1, {
          fileName: "app/components/productCard.tsx",
          lineNumber: 13,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
          className: "pt-2 text-white text-[1.15rem] sm:text-xl",
          children: title
        }, void 0, !1, {
          fileName: "app/components/productCard.tsx",
          lineNumber: 14,
          columnNumber: 9
        }, this)
      ]
    }, void 0, !0, {
      fileName: "app/components/productCard.tsx",
      lineNumber: 12,
      columnNumber: 7
    }, this)
  }, void 0, !1, {
    fileName: "app/components/productCard.tsx",
    lineNumber: 11,
    columnNumber: 5
  }, this);
}

// app/routes/index.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), loader = async () => await getHomePageData();
function Index() {
  let { heroText, products, smallHeading } = (0, import_react7.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "px-10 sm:px-20 md:px-44 pt-44 max-w-[100rem] flex-grow w-screen",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
          className: "text-[2.5rem] sm:text-5xl lg:text-6xl xl:text-8xl relative font-medium lg:leading-[1.15] xl:leading-[1.2]",
          children: [
            heroText.start_text,
            " ",
            heroText.mid_text.split(" ").map((text) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
              className: "text-gray-50",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                  className: "relative",
                  children: [
                    text,
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                      className: "h-1 bg-emerald-200 w-full absolute bottom-0 left-0 inline-block"
                    }, void 0, !1, {
                      fileName: "app/routes/index.tsx",
                      lineNumber: 26,
                      columnNumber: 17
                    }, this)
                  ]
                }, void 0, !0, {
                  fileName: "app/routes/index.tsx",
                  lineNumber: 24,
                  columnNumber: 15
                }, this),
                " "
              ]
            }, text, !0, {
              fileName: "app/routes/index.tsx",
              lineNumber: 23,
              columnNumber: 13
            }, this)),
            heroText.end_text
          ]
        }, void 0, !0, {
          fileName: "app/routes/index.tsx",
          lineNumber: 20,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 19,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "flex flex-col items-center pt-40 pb-44",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
            className: "text-2xl sm:text-3xl lg:text-4xl pb-10 text-white",
            children: smallHeading
          }, void 0, !1, {
            fileName: "app/routes/index.tsx",
            lineNumber: 35,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "grid grid-cols-2 xl:grid-cols-4 gap-x-6",
            children: products.map(({ attributes }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ProductCard, {
              image: attributes.thumbnail,
              handle: attributes.handle,
              title: attributes.title
            }, attributes.medusa_id, !1, {
              fileName: "app/routes/index.tsx",
              lineNumber: 40,
              columnNumber: 13
            }, this))
          }, void 0, !1, {
            fileName: "app/routes/index.tsx",
            lineNumber: 38,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/routes/index.tsx",
        lineNumber: 34,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/routes/index.tsx",
    lineNumber: 17,
    columnNumber: 5
  }, this);
}

// app/routes/cart.tsx
var cart_exports = {};
__export(cart_exports, {
  default: () => Cart
});
var import_react8 = require("react");
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function Cart() {
  let [cart, setCart] = (0, import_react8.useState)();
  if ((0, import_react8.useEffect)(() => {
    medusaClient.carts.retrieve(localStorage.getItem("cart_id")).then(({ cart: cart2 }) => {
      setCart(cart2);
    });
  }, [cart]), cart)
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
      className: "px-10 sm:px-20 md:px-44 pt-44 max-w-[100rem] flex-grow w-screen",
      children: cart.items.map((variant) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "flex flex-col xl:flex-row h-64 my-10 space-x-8 space-y-4 items-center",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
            className: "h-full",
            src: variant.thumbnail
          }, void 0, !1, {
            fileName: "app/routes/cart.tsx",
            lineNumber: 25,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
                className: "pt-2 text-white text-xl",
                children: variant.title
              }, void 0, !1, {
                fileName: "app/routes/cart.tsx",
                lineNumber: 27,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                className: "text-slate-400",
                children: variant.quantity
              }, void 0, !1, {
                fileName: "app/routes/cart.tsx",
                lineNumber: 28,
                columnNumber: 15
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/routes/cart.tsx",
            lineNumber: 26,
            columnNumber: 13
          }, this)
        ]
      }, variant.id, !0, {
        fileName: "app/routes/cart.tsx",
        lineNumber: 21,
        columnNumber: 11
      }, this))
    }, void 0, !1, {
      fileName: "app/routes/cart.tsx",
      lineNumber: 19,
      columnNumber: 7
    }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { version: "2efd6c0e", entry: { module: "/build/entry.client-C5LFDDA4.js", imports: ["/build/_shared/chunk-B4HKLHO2.js", "/build/_shared/chunk-E3EGBJSO.js", "/build/_shared/chunk-65PYRVZI.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-3CHEX5BO.js", imports: ["/build/_shared/chunk-JALJQDQC.js", "/build/_shared/chunk-YCBMB7C3.js", "/build/_shared/chunk-DMXEN77A.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/cart": { id: "routes/cart", parentId: "root", path: "cart", index: void 0, caseSensitive: void 0, module: "/build/routes/cart-BU3PISPV.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-IYV2SFRQ.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/products/$slug": { id: "routes/products/$slug", parentId: "root", path: "products/:slug", index: void 0, caseSensitive: void 0, module: "/build/routes/products/$slug-BHX3T7PV.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, url: "/build/manifest-2EFD6C0E.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public\\build", publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/products/$slug": {
    id: "routes/products/$slug",
    parentId: "root",
    path: "products/:slug",
    index: void 0,
    caseSensitive: void 0,
    module: slug_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: routes_exports
  },
  "routes/cart": {
    id: "routes/cart",
    parentId: "root",
    path: "cart",
    index: void 0,
    caseSensitive: void 0,
    module: cart_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  publicPath,
  routes
});
//# sourceMappingURL=index.js.map
