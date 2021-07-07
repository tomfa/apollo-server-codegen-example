(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5080:function(e,r,s){"use strict";s.r(r),s.d(r,{default:function(){return w}});var n=s(5893),a=s(809),t=s.n(a),i=s(2447),o=s(9227),l=s(9008),c=s(7294),h=s(5323),d=s.n(h),m=s(6265),p=s(7261),u=s(2527),x=s(6829);function j(){var e=(0,p.Z)(["\n    query getCustomerByEmail($email: String!) {\n  getCustomerByEmail(email: $email) {\n    name\n    email\n    phoneNumber\n    issuer\n    credits\n  }\n}\n    "]);return j=function(){return e},e}function g(e,r){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),s.push.apply(s,n)}return s}function f(e){for(var r=1;r<arguments.length;r++){var s=null!=arguments[r]?arguments[r]:{};r%2?g(Object(s),!0).forEach((function(r){(0,m.Z)(e,r,s[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):g(Object(s)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(s,r))}))}return e}function b(){var e=(0,p.Z)(["\n    mutation addCustomer($name: String!, $email: String!, $phoneNumber: String) {\n  addCustomer(name: $name, email: $email, phoneNumber: $phoneNumber) {\n    name\n    email\n    phoneNumber\n    issuer\n    credits\n  }\n}\n    "]);return b=function(){return e},e}var _={},v=(0,u.ZP)(b());var y=(0,u.ZP)(j());function w(){var e,r=(0,c.useState)("tomas@askeladden.co"),s=r[0],a=r[1],h=(0,c.useState)("Tomas"),m=h[0],p=h[1],u=function(e){var r=f(f({},_),e);return x.useQuery(y,r)}({variables:{email:s}}),j=u.error,g=u.loading,b=u.data,w=u.refetch,N=g?"...":null===b||void 0===b||null===(e=b.getCustomerByEmail)||void 0===e?void 0:e.name,k=function(e){var r=f(f({},_),e);return x.useMutation(v,r)}(),C=(0,o.Z)(k,1)[0],P=function(){var e=(0,i.Z)(t().mark((function e(){return t().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C({variables:{name:m,email:s}});case 2:return e.next=4,w();case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,n.jsxs)("div",{className:d().container,children:[(0,n.jsxs)(l.default,{children:[(0,n.jsx)("title",{children:"Create Next App"}),(0,n.jsx)("meta",{name:"description",content:"Generated by create next app"}),(0,n.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,n.jsxs)("main",{className:d().main,children:[(0,n.jsxs)("h1",{className:d().title,children:["Welcome to Code generation",N&&", ".concat(N)||"","!"]}),(0,n.jsxs)("div",{className:d().formInput,children:[(0,n.jsx)("label",{className:d().label,htmlFor:"email",children:"Email"}),(0,n.jsx)("input",{id:"email",onChange:function(e){return a(e.target.value.toLowerCase())},value:s})]}),(0,n.jsxs)("div",{className:d().formInput,children:[(0,n.jsx)("label",{className:d().label,htmlFor:"name",children:"Name"}),(0,n.jsx)("input",{id:"name",onChange:function(e){return p(e.target.value.toLowerCase())},value:m})]}),(0,n.jsx)("p",{className:d().description,children:"This project is a demo of how easily you can get up and running with GraphQL and types using code generation."}),(0,n.jsx)("h3",{children:"This repo contains"}),(0,n.jsxs)("ul",{children:[(0,n.jsxs)("li",{children:["Prisma as database ORM ",(0,n.jsx)("em",{children:"(types are autogenerated from DB)"})]}),(0,n.jsxs)("li",{children:["An Apollo GraphQL server with graphiQL ",(0,n.jsx)("em",{children:"(run with `yarn start`, then open localhost:4000)"})]}),(0,n.jsxs)("li",{children:["A NextJS webapp consuming the API ",(0,n.jsx)("em",{children:"(hooks are autogenerated from API)"})]})]}),(0,n.jsx)("h3",{children:"To demo this, you have to:"}),(0,n.jsxs)("ol",{children:[(0,n.jsxs)("li",{children:["Create a Postgres DB locally ",(0,n.jsxs)("em",{children:["(set DB_URL in ",(0,n.jsx)("code",{children:".env"})," file)"]})," "]}),(0,n.jsxs)("li",{children:["Write a DB schema ",(0,n.jsxs)("em",{children:["(Change or replace in ",(0,n.jsx)("code",{children:"schema.prisma"}),")"]})," "]}),(0,n.jsxs)("li",{children:["Write a GraphQL schema ",(0,n.jsxs)("em",{children:["(Change or replace in ",(0,n.jsx)("code",{children:"schema.graphql"}),")"]})," "]})]}),(0,n.jsxs)("div",{className:d().grid,children:[j&&(0,n.jsxs)("div",{className:d()["card-error"],children:[(0,n.jsx)("h2",{children:"GraphQL returned an error"}),(0,n.jsx)("p",{children:j.message}),(0,n.jsxs)("p",{children:["Have you started the server yet? Consider"," ",(0,n.jsx)("a",{className:d().link,href:"https://chrome.google.com/webstore/detail/apollo-client-devtools/jdkknkkbebbapilgoeccciglkfbmbnfm",children:"Apollo Client devtools"})," ","for debugging."]})]}),!j&&!(null!==b&&void 0!==b&&b.getCustomerByEmail)&&(0,n.jsxs)("div",{className:d().card,children:[(0,n.jsx)("h2",{children:"No data?"}),(0,n.jsxs)("p",{children:["Unable to find user with email ",s]}),(0,n.jsxs)("p",{children:["Have you created a user in the database yet? You can add one by clicking this button"," ",(0,n.jsxs)("button",{className:d().createCustomer,onClick:P,disabled:!s,children:["Create ",s]})]})]}),(0,n.jsxs)("div",{className:d().card,children:[(0,n.jsx)("h2",{children:"Generate db migrations and prisma types"}),(0,n.jsxs)("p",{children:["The API uses"," ",(0,n.jsx)("a",{className:d().link,href:"https://www.prisma.io/docs/getting-started",children:"Prisma"})," ","as a database ORM. Prisma inspects the postgres database and generates migrations and typescript types for the database."]}),(0,n.jsxs)("p",{children:["Try to update ",(0,n.jsx)("code",{children:"schema.prisma"}),", then generate any migrations and update prisma types by running",(0,n.jsx)("code",{children:" yarn generate"})," in the root folder"]})]}),(0,n.jsxs)("div",{className:d().card,children:[(0,n.jsx)("h2",{children:"Generate GraphQL hooks"}),(0,n.jsxs)("p",{children:["This repository uses"," ",(0,n.jsx)("a",{href:"https://www.graphql-code-generator.com/",className:d().link,children:"Code Generator"})," ","to generate React hooks for Apollo Client."]}),(0,n.jsxs)("p",{children:["Generate the hooks by running",(0,n.jsx)("code",{children:" yarn generate"})," in the web folder."]}),(0,n.jsxs)("p",{children:["Try to update ",(0,n.jsx)("code",{children:"schema.graphql"})," by removing the name field, then generate types again. Notice how Typescript will complain in this file automatically that name is not defined on the return values."]})]}),(0,n.jsxs)("div",{className:d().card,children:[(0,n.jsx)("h2",{children:"Apollo Server"}),(0,n.jsx)("p",{children:"The API uses Apollo server for serving the GraphQL API"}),(0,n.jsxs)("p",{children:["See"," ",(0,n.jsx)("a",{className:d().link,href:"https://www.apollographql.com/docs/apollo-server/getting-started/",children:"Apollo Server - getting started"})," ","for more"]})]}),(0,n.jsxs)("div",{className:d().card,children:[(0,n.jsx)("h2",{children:"NextJS"}),(0,n.jsx)("p",{children:"This page uses NextJS as a frontend framework."}),(0,n.jsxs)("p",{children:["See"," ",(0,n.jsx)("a",{className:d().link,href:"https://nextjs.org/docs",children:"NextJS \u2013 getting started"})," ","for more"]})]}),(0,n.jsxs)("div",{className:d().card,children:[(0,n.jsx)("h2",{children:"GraphQL Client"}),(0,n.jsxs)("p",{children:["This page uses"," ",(0,n.jsx)("a",{className:d().link,href:"https://www.apollographql.com/docs/react/get-started/",children:"Apollo Client"})," ","to interact with the GraphQL API."]}),(0,n.jsxs)("p",{children:["Even though the server is Apollo Server, you can use other GraphQL clients such as"," ",(0,n.jsx)("a",{className:d().link,href:"https://react-query.tanstack.com/graphql",children:"React Query"}),","," ",(0,n.jsx)("a",{className:d().link,href:"https://github.com/prisma-labs/graphql-request",children:"GraphQL request"})]}),(0,n.jsxs)("p",{children:["There are"," ",(0,n.jsx)("a",{href:"https://www.graphql-code-generator.com/docs/plugins/typescript-react-apollo",className:d().link,children:"code-generators for each of these and more."})]})]})]}),(0,n.jsxs)("div",{className:d().card,children:[(0,n.jsx)("h2",{children:"Instant API: Postgraphile"}),(0,n.jsxs)("p",{children:["If setting up the API is too much hassle, there is also"," ",(0,n.jsx)("a",{href:"https://www.graphile.org/postgraphile/",className:d().link,children:"Postgraphile"}),"."]}),(0,n.jsx)("p",{children:"Try it now, by stopping your server, then running"}),(0,n.jsx)("code",{children:"npx postgraphile -c my_database_name --watch"})]}),(0,n.jsxs)("div",{className:d().card,children:[(0,n.jsx)("h2",{children:"No-code: Hasura"}),(0,n.jsxs)("p",{children:["Push your API to production without coding at all using"," ",(0,n.jsx)("a",{href:"https://hasura.io/",className:d().link,children:"Hasura"}),"."]})]})]}),(0,n.jsx)("footer",{className:d().footer,children:(0,n.jsxs)("a",{href:"https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",target:"_blank",rel:"noopener noreferrer",children:["Powered by"," "," Vercel :heart: I like them."]})})]})}},5301:function(e,r,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return s(5080)}])},5323:function(e){e.exports={container:"Home_container__1EcsU",main:"Home_main__1x8gC",link:"Home_link__mABeA",label:"Home_label__36S2X",formInput:"Home_formInput__D2pbJ",createCustomer:"Home_createCustomer__G9gpT",footer:"Home_footer__1WdhD",title:"Home_title__3DjR7",description:"Home_description__17Z4F",code:"Home_code__axx2Y",grid:"Home_grid__2Ei2F",card:"Home_card__2SdtB","card-error":"Home_card-error__jE2TE",logo:"Home_logo__1YbrH"}}},function(e){e.O(0,[155,774,888,179],(function(){return r=5301,e(e.s=r);var r}));var r=e.O();_N_E=r}]);