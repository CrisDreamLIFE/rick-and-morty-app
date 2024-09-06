// import * as React from "react";
// export const Logo = (props) => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     xmlSpace="preserve"
//     style={{
//       enableBackground: "new 0 0 100 100",
//     }}
//     viewBox="0 0 100 100"
//     {...props}
//   >
//     <path
//       d="M30.066 80.269 15.171 82.13l5.586-10.24-13.033-3.724 11.171-8.378L5.862 46.754l13.033-3.723L4 22.55l21.412 3.724L20.757 3 43.1 17.895 57.995 3l1.862 19.55 24.204-5.586-9.309 21.412 16.757 7.448-15.826 8.378 12.102 8.379-10.24 4.654 5.585 11.172-12.102.931.931 6.516-25.135-6.516z"
//       style={{
//         fill: "#a3a3cd",
//       }}
//     />
//     <path d="M71.959 86.854c-.084 0-.168-.011-.251-.032l-24.985-6.478-16.566.92-14.861 1.858a.998.998 0 0 1-1.002-1.471l4.987-9.145-11.831-3.38a1.001 1.001 0 0 1-.325-1.761l10.249-7.687L5.155 47.461a.998.998 0 0 1 .432-1.668l11.657-3.331L3.191 23.138a1 1 0 0 1 .98-1.574l19.975 3.474-4.37-21.842a1 1 0 0 1 1.535-1.028l21.661 14.44L57.288 2.293a.997.997 0 0 1 1.702.612l1.754 18.414 23.093-5.329a.999.999 0 0 1 1.141 1.373l-8.914 20.502 15.851 7.045a.999.999 0 0 1 .062 1.797l-14.372 7.609 10.75 7.441a1 1 0 0 1-.155 1.732l-9.296 4.226 5.122 10.243a1 1 0 0 1-.817 1.444l-11.039.85.78 5.46a1 1 0 0 1-.991 1.142zm-25.136-8.516c.085 0 .169.011.251.032l23.683 6.14-.719-5.03a1.003 1.003 0 0 1 .913-1.139l10.62-.817-4.921-9.841a1 1 0 0 1 .48-1.357l8.636-3.926-10.653-7.375a1.003 1.003 0 0 1 .101-1.706l14.009-7.416-14.877-6.613a1.001 1.001 0 0 1-.511-1.313l8.519-19.592-22.272 5.14a1.004 1.004 0 0 1-1.22-.88l-1.66-17.436-13.395 13.393a.998.998 0 0 1-1.262.125L22.211 5.171l4.182 20.906a1.002 1.002 0 0 1-1.152 1.182l-18.98-3.301 13.443 18.484a1.001 1.001 0 0 1-.534 1.55L7.771 47.249l11.831 11.832a.998.998 0 0 1-.107 1.507l-9.561 7.17 11.097 3.17a.999.999 0 0 1 .603 1.44l-4.651 8.528 12.959-1.62a.78.78 0 0 1 .068-.006l16.757-.931.056-.001z" />
//     <circle
//       cx={27}
//       cy={64}
//       r={6}
//       style={{
//         fill: "#fed5b3",
//       }}
//     />
//     <path d="M27 71c-3.859 0-7-3.141-7-7s3.141-7 7-7 7 3.141 7 7-3.141 7-7 7zm0-12c-2.757 0-5 2.243-5 5s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5z" />
//     <circle
//       cx={68}
//       cy={64}
//       r={6}
//       style={{
//         fill: "#fed5b3",
//       }}
//     />
//     <path d="M68 71c-3.859 0-7-3.141-7-7s3.141-7 7-7 7 3.141 7 7-3.141 7-7 7zm0-12c-2.757 0-5 2.243-5 5s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5z" />
//     <path
//       d="M26.926 41.645s-3.706 29.112 3.706 42.26 28.721 14.087 34.28-.939 4.328-31.689 2.779-43.199c-2.779-20.66-38.912-27.234-40.765 1.878z"
//       style={{
//         fill: "#fed5b3",
//       }}
//     />
//     <path d="M48.462 95c-7.681 0-15.044-4.118-18.7-10.604-7.433-13.184-4.032-41.25-3.831-42.845.948-14.684 10.381-20.238 18.897-20.537 10.208-.361 22.245 6.659 23.854 18.62 1.525 11.339 2.893 28.204-2.833 43.679-2.475 6.691-8.342 11.035-15.692 11.62-.565.046-1.132.067-1.695.067zm-2.87-72c-.232 0-.463.004-.693.012-9.905.348-16.251 7.336-16.974 18.696a.67.67 0 0 1-.006.063c-.037.288-3.578 28.936 3.585 41.642 3.549 6.296 10.975 10.12 18.494 9.526 6.651-.53 11.746-4.292 13.977-10.32C69.544 67.562 68.197 51.027 66.7 39.9 65.276 29.315 54.782 23 45.592 23zM26.927 41.645h.01-.01z" />
//     <path
//       d="M31.657 46.5c-1.012 1.639-1.444 3.674-.957 5.832.663 2.942 3.078 5.277 6.042 5.836 4.942.93 9.258-2.835 9.258-7.608a7.706 7.706 0 0 0-1.157-4.06H31.657z"
//       style={{
//         fill: "#fff",
//       }}
//     />
//     <path d="M38.233 58.807a8.601 8.601 0 0 1-1.584-.148c-3.146-.593-5.732-3.092-6.437-6.217a8.276 8.276 0 0 1 1.019-6.204.5.5 0 0 1 .426-.238h13.186c.174 0 .334.09.426.237a8.232 8.232 0 0 1-1.756 10.676 8.254 8.254 0 0 1-5.28 1.894zM31.942 47a7.285 7.285 0 0 0-.755 5.221c.618 2.743 2.888 4.935 5.647 5.455 2.167.41 4.371-.149 6.039-1.532A7.233 7.233 0 0 0 44.557 47H31.942z" />
//     <path
//       d="M34.224 43.347a7.748 7.748 0 0 0-3.709 6.338c5.174-1.36 10.318-1.565 15.433-.591a7.75 7.75 0 0 0-3.233-5.46"
//       style={{
//         fill: "#fed5b3",
//       }}
//     />
//     <path d="M30.515 50.185a.507.507 0 0 1-.313-.109.507.507 0 0 1-.188-.409 8.24 8.24 0 0 1 3.948-6.747.501.501 0 0 1 .522.854 7.234 7.234 0 0 0-3.414 5.255c4.775-1.162 9.569-1.347 14.272-.552a7.26 7.26 0 0 0-2.917-4.435.5.5 0 0 1 .576-.817 8.248 8.248 0 0 1 3.442 5.813.5.5 0 0 1-.591.547c-4.999-.952-10.117-.756-15.212.583a.439.439 0 0 1-.125.017z" />
//     <path
//       d="M50.657 46.5c-1.012 1.639-1.444 3.674-.957 5.832.663 2.942 3.078 5.277 6.042 5.836 4.942.93 9.258-2.835 9.258-7.608a7.706 7.706 0 0 0-1.157-4.06H50.657z"
//       style={{
//         fill: "#fff",
//       }}
//     />
//     <path d="M57.233 58.807a8.601 8.601 0 0 1-1.584-.148c-3.146-.593-5.732-3.092-6.437-6.217a8.276 8.276 0 0 1 1.019-6.204.5.5 0 0 1 .426-.238h13.186c.174 0 .334.09.426.237a8.232 8.232 0 0 1-1.756 10.676 8.254 8.254 0 0 1-5.28 1.894zM50.942 47a7.285 7.285 0 0 0-.755 5.221c.618 2.743 2.888 4.935 5.647 5.455 2.169.41 4.371-.149 6.039-1.532A7.233 7.233 0 0 0 63.557 47H50.942z" />
//     <path
//       d="M53.224 43.347a7.748 7.748 0 0 0-3.709 6.338c5.174-1.36 10.318-1.565 15.433-.591a7.75 7.75 0 0 0-3.233-5.46"
//       style={{
//         fill: "#fed5b3",
//       }}
//     />
//     <path d="M49.515 50.185a.507.507 0 0 1-.313-.109.507.507 0 0 1-.188-.409 8.24 8.24 0 0 1 3.948-6.747.501.501 0 0 1 .522.854 7.234 7.234 0 0 0-3.414 5.255c4.775-1.162 9.569-1.347 14.272-.552a7.26 7.26 0 0 0-2.917-4.435.5.5 0 0 1 .576-.817 8.248 8.248 0 0 1 3.442 5.813.5.5 0 0 1-.591.547c-4.999-.952-10.117-.756-15.212.583a.439.439 0 0 1-.125.017z" />
//     <circle cx={38.5} cy={49.5} r={1.5} />
//     <circle cx={57.5} cy={49.5} r={1.5} />
//     <path d="M37.235 62.651c-3.374 0-5.608-1.969-5.729-2.078a.5.5 0 0 1 .669-.743c.142.126 3.501 3.062 8.14 1.206a.498.498 0 1 1 .371.927 9.203 9.203 0 0 1-3.451.688zM57.105 62.651c-1.05 0-2.21-.19-3.45-.688a.498.498 0 1 1 .371-.927c4.656 1.861 8.104-1.175 8.139-1.205a.499.499 0 1 1 .67.742c-.121.11-2.356 2.078-5.73 2.078zM50.065 30.751a.5.5 0 0 1-.078-.994 29.085 29.085 0 0 0 3.375-.739.5.5 0 1 1 .275.962 30.184 30.184 0 0 1-3.492.764.356.356 0 0 1-.08.007zM43.354 31.251c-2.83 0-4.803-.241-4.916-.255a.5.5 0 0 1-.434-.558.505.505 0 0 1 .558-.434c.038.005 3.797.464 8.332.115a.51.51 0 0 1 .536.46.5.5 0 0 1-.46.537 47.63 47.63 0 0 1-3.616.135zM47 69.75c-.805 0-1.576-.415-2.119-1.138-.576-.768-.881-1.844-.881-3.112v-6a.5.5 0 0 1 1 0v6c0 2.233 1.037 3.25 2 3.25s2-1.017 2-3.25v-6a.5.5 0 0 1 1 0v6c0 2.92-1.555 4.25-3 4.25zM58.5 80a.517.517 0 0 1-.192-.038c-11.649-4.856-22.494-.055-22.601-.007a.501.501 0 0 1-.414-.91c.111-.052 11.337-5.029 23.399-.007A.501.501 0 0 1 58.5 80z" />
//     <path
//       d="m19.866 36.878 2.049 2.675"
//       style={{
//         fill: "#cdcbbd",
//       }}
//     />
//     <path d="M21.915 40.053a.494.494 0 0 1-.396-.196l-2.05-2.676a.5.5 0 1 1 .793-.608l2.05 2.676a.5.5 0 0 1-.397.804z" />
//     <path
//       d="m12.723 27.553 5.131 6.699"
//       style={{
//         fill: "#cdcbbd",
//       }}
//     />
//     <path d="M17.854 34.751a.494.494 0 0 1-.396-.196l-5.131-6.698a.5.5 0 1 1 .793-.608l5.131 6.698a.5.5 0 0 1-.397.804z" />
//     <path
//       d="m27.591 17.022 1.6 6.957"
//       style={{
//         fill: "#cdcbbd",
//       }}
//     />
//     <path d="M29.191 24.479a.5.5 0 0 1-.487-.388l-1.6-6.956a.5.5 0 1 1 .975-.224l1.6 6.956a.5.5 0 0 1-.488.612z" />
//     <path
//       d="m26.255 11.213.632 2.746"
//       style={{
//         fill: "#cdcbbd",
//       }}
//     />
//     <path d="M26.887 14.459a.498.498 0 0 1-.487-.388l-.632-2.746a.5.5 0 1 1 .975-.225l.632 2.746a.5.5 0 0 1-.488.613z" />
//     <path
//       d="M40.737 40.568a52.67 52.67 0 0 1-8.041-.591 2 2 0 0 1 .607-3.953c6.612 1.016 12.402.409 17.511-.127 4.669-.491 8.7-.915 11.861.222a2 2 0 1 1-1.352 3.765c-2.302-.827-5.912-.448-10.093-.008-3.075.321-6.606.692-10.493.692z"
//       style={{
//         fill: "#a3a3cd",
//       }}
//     />
//     <path d="M40.737 41.068c-2.852 0-5.507-.195-8.117-.597a2.503 2.503 0 0 1-2.091-2.851 2.49 2.49 0 0 1 1.001-1.64 2.443 2.443 0 0 1 1.852-.45c6.547 1.006 12.303.402 17.381-.131 4.73-.498 8.815-.926 12.082.248a2.486 2.486 0 0 1 1.417 1.287 2.503 2.503 0 0 1-3.106 3.42c-2.197-.79-5.753-.416-9.871.018-3.12.327-6.64.696-10.548.696zm-7.743-4.569c-.313 0-.616.099-.875.288a1.5 1.5 0 0 0 .653 2.695c2.56.394 5.164.585 7.965.585 3.854 0 7.348-.366 10.429-.69 4.252-.448 7.914-.833 10.327.034a1.502 1.502 0 0 0 1.863-2.051 1.491 1.491 0 0 0-.85-.772c-3.054-1.098-7.034-.68-11.639-.195-5.14.541-10.962 1.151-17.641.125a1.396 1.396 0 0 0-.232-.019z" />
//   </svg>
// );
