// בס"ד

const svgs = {
    phone:`<svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 96 960 960" width="20"><path d="M744 575q0-109-77.5-186.5T480 311v-72q70 0 131.133 26.6 61.134 26.6 106.4 71.867 45.267 45.266 71.867 106.4Q816 505 816 575h-72Zm-144 0q0-50-35-85t-85-35v-72q80 0 136 56.16T672 575h-72Zm163 336q-123-10-232-61.5T339.5 715Q257 632 205 523t-61-232q-2-21 12.286-36.5Q170.571 239 192 239h136q17 0 29.5 10t16.5 27l24 107q2 12-1 24t-12 21l-97 98q42 76 103 137t137 103l99-96q10-10 21.802-12.5Q660.605 655 672 657l107 23q17 4 27 16.9 10 12.9 10 30.1v136q0 27-19 38t-34 10ZM255 456l70-70-17.16-75H218q5 38 14 74t23 71Zm344 344q35.1 14.243 71.55 22.622Q707 831 744 836v-90l-75-16-70 70ZM255 456Zm344 344Z"/></svg>`,
    storeAnyFile:`<svg width="91" height="64" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M85.588 59C88.025 59 90 57.144 90 54.853V9.236c0-1.526-1.318-2.764-2.941-2.764L85.589 59zM15 12.048v40.047C15 55.908 18.098 59 21.92 59h63.668a4.147 4.147 0 0 1-4.152-4.143V3.762A2.766 2.766 0 0 0 78.668 1h-16.61l-5.536 8.286H17.768A2.766 2.766 0 0 0 15 12.048z" stroke="#62E0D9" stroke-width="1.405" stroke-linecap="round" stroke-linejoin="round"/><path d="M41.28 27.561v3.201c0 1.061.841 1.92 1.88 1.92h3.13m2.505 0v-.219c0-.679-.264-1.33-.734-1.811l-4.794-4.902a2.48 2.48 0 0 0-1.772-.75h-13.99C26.12 25 25 26.147 25 27.561v26.89c0 1.414 1.121 2.56 2.505 2.56H46.29c1.383 0 2.505-1.146 2.505-2.56v-8.963" fill="#62E0D9"/><path d="M33.766 49.33v3.84h3.757l11.898-12.164-3.757-3.841-11.898 12.164zm15.655-8.324l1.328-1.358a1.951 1.951 0 0 0 0-2.717l-1.1-1.124a1.85 1.85 0 0 0-2.657 0l-1.328 1.358 3.757 3.841z" stroke="#FFF" stroke-width=".803" stroke-linejoin="round"/><path d="M30.01 37.805h12.523m-12.524 3.841h11.272m-11.272 3.842h7.514" stroke="#FFF" stroke-width=".803" stroke-linecap="round" stroke-linejoin="round"/><g><path d="M32.367 59.432c0 1.972-1.61 3.572-3.596 3.572H3.596c-1.985 0-3.596-1.6-3.596-3.572v-17.86C0 39.6 1.61 38 3.596 38h25.175c1.985 0 3.596 1.6 3.596 3.572v17.86zM10.789 44.55a2.987 2.987 0 0 1-2.997 2.976 2.987 2.987 0 0 1-2.997-2.976 2.987 2.987 0 0 1 2.997-2.977 2.987 2.987 0 0 1 2.997 2.977z" fill="#62E0D9"/><path stroke="#FFF" stroke-width=".65" stroke-linecap="round" stroke-linejoin="round" d="M26.786 58.656L19.737 51.2 16.8 54.307l-4.112-4.349-8.224 8.698"/></g></g></svg>`,
    collaboration:`<svg width="86" height="71" xmlns="http://www.w3.org/2000/svg"><g stroke="#62E0D9" stroke-width="1.3" fill="none" fill-rule="evenodd" stroke-linejoin="round"><path d="M33.897 11.338v2.027-2.027zm0 40.551v2.028-2.028zm20.31-18.248h-2.031 2.031zm-40.62 0h-2.032 2.031zm19.294 8.11c-.78 0-1.56-.296-2.153-.89l-13.08-13.057 4.308-4.3L32.881 34.41 60.176 7.16l4.31 4.3-29.45 29.4a3.04 3.04 0 0 1-2.155.89zm23.154-30.417C50.283 5.104 42.039 1.2 32.88 1.2 15.495 1.2 1.4 15.271 1.4 32.627s14.095 31.428 31.481 31.428c17.386 0 31.481-14.072 31.481-31.428 0-6.018-1.694-11.64-4.63-16.417l-3.697-4.876zM51.7 15.616a25.346 25.346 0 0 0-18.82-8.333c-14.022 0-25.388 11.346-25.388 25.344 0 13.999 11.366 25.345 25.388 25.345 14.022 0 25.388-11.346 25.388-25.345 0-4.329-1.087-8.402-3.002-11.966l-3.566-5.045z" stroke-linecap="round"/><path d="M55.368 40.484c0 2.48-2.015 4.49-4.498 4.49a4.494 4.494 0 0 1-4.497-4.49c0-2.48 2.015-4.49 4.497-4.49a4.494 4.494 0 0 1 4.498 4.49z"/><path d="M50.87 44.974c-1.898 0-3.612.583-4.839 1.154a3.34 3.34 0 0 0-1.907 3.033v7.037a2.248 2.248 0 0 0 2.249 2.245v8.979a2.247 2.247 0 0 0 2.249 2.245h4.497a2.247 2.247 0 0 0 2.249-2.245v-8.98a2.248 2.248 0 0 0 2.248-2.244V49.16a3.34 3.34 0 0 0-1.907-3.033c-1.226-.57-2.94-1.154-4.839-1.154z" stroke-linecap="round"/><path d="M68.86 40.484c0 2.48-2.014 4.49-4.498 4.49a4.493 4.493 0 0 1-4.497-4.49c0-2.48 2.014-4.49 4.497-4.49a4.493 4.493 0 0 1 4.497 4.49z"/><path d="M64.362 44.974c-1.898 0-3.612.583-4.839 1.154a3.34 3.34 0 0 0-1.907 3.033v7.037a2.247 2.247 0 0 0 2.249 2.245v8.979a2.248 2.248 0 0 0 2.249 2.245h4.497a2.247 2.247 0 0 0 2.248-2.245v-8.98a2.247 2.247 0 0 0 2.25-2.244V49.16a3.34 3.34 0 0 0-1.908-3.033c-1.226-.57-2.941-1.154-4.839-1.154z" stroke-linecap="round"/><path d="M82.351 40.484c0 2.48-2.013 4.49-4.497 4.49a4.493 4.493 0 0 1-4.497-4.49c0-2.48 2.013-4.49 4.497-4.49a4.493 4.493 0 0 1 4.497 4.49z"/><path d="M77.854 44.974c-1.898 0-3.612.583-4.839 1.154a3.34 3.34 0 0 0-1.907 3.033v7.037a2.247 2.247 0 0 0 2.249 2.245v8.979a2.248 2.248 0 0 0 2.248 2.245h4.498a2.247 2.247 0 0 0 2.248-2.245v-8.98a2.247 2.247 0 0 0 2.249-2.244V49.16a3.34 3.34 0 0 0-1.907-3.033c-1.226-.57-2.941-1.154-4.839-1.154z" stroke-linecap="round"/></g></svg>`,
    accessAnywhere:`<svg width="83" height="78" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M2.476 53.466h71.117v-7.983H2.476v7.983zm49.237 11.977h3.943v3.529H20.413v-3.529h3.942c.656 0 1.185-.529 1.185-1.183v-8.427h24.988v8.427c0 .654.53 1.183 1.185 1.183zM2.476 43.116h71.117V2.95H2.476v40.165zM1.29.585C.635.585.105 1.114.105 1.768V54.65c0 .655.53 1.184 1.185 1.184h21.88v7.243h-3.943c-.655 0-1.185.532-1.185 1.184v5.895c0 .652.53 1.184 1.185 1.184h37.615c.654 0 1.185-.532 1.185-1.184V64.26c0-.652-.531-1.184-1.185-1.184h-3.944v-7.243h21.88c.655 0 1.186-.53 1.186-1.184V1.77c0-.655-.531-1.184-1.185-1.184H1.29z" fill="#62E0D9"/><path d="M36.412 47.92c-.654 0-1.185.53-1.185 1.184a1.185 1.185 0 0 0 2.37 0c0-.653-.531-1.184-1.185-1.184" fill="#62E0D9"/><g transform="translate(55.377 23.07)" stroke="#62E0D9"><rect stroke-width="1.641" fill="#181F2B" x=".821" y=".821" width="25.621" height="52.795" rx="2.462"/><path stroke-width="1.458" fill="#FFF" d="M.729 6.646h25.803v1H.729zM.729 44.515h25.803v1H.729z"/><ellipse stroke-width="1.01" cx="13.038" cy="48.519" rx="1.185" ry="1.183"/></g><g><path d="M45.4 15.969h-.197l-5.235 2.07-5.927-2.07-5.531 1.874c-.198.098-.395.197-.395.493v14.89c0 .297.197.494.494.494h.197l5.235-2.071 5.927 2.07 5.531-1.873c.198-.099.395-.296.395-.493V16.462c0-.296-.197-.493-.494-.493zM39.968 30.76l-5.927-1.997V17.448l5.927 1.997v11.316z" fill="#62E0D9"/><path d="M30.485 15.969c-1.32 0-2.37.917-2.37 2.07 0 1.54 2.37 3.847 2.37 3.847s2.371-2.308 2.371-3.846c0-1.154-1.05-2.071-2.37-2.071zm0 2.958c-.51 0-.911-.361-.911-.821 0-.46.4-.822.911-.822s.912.361.912.822c0 .46-.401.821-.912.821z" fill="#FFF"/></g></g></svg>`,
    security:`<svg width="70" height="88" xmlns="http://www.w3.org/2000/svg"><g stroke="#62E0D9" stroke-width="3.064" fill="none" fill-rule="evenodd"><path d="M43.703 35.501l-12.23 12.474-8.999-9.177-4.499 4.589 13.497 13.766L52.08 36.137l-4.5-4.589z"/><path d="M56.916 9.85c-5.342 0-10.653-1.136-15.482-3.484-2.313-1.113-4.679-2.533-6.724-4.302-2.045 1.769-4.411 3.189-6.725 4.302C23.157 8.714 17.847 9.85 12.504 9.85H1.914v40.59c0 7.11 2.817 13.945 7.827 18.893 7.356 7.25 24.97 16.674 24.97 16.674s17.612-9.424 24.968-16.674c5.01-4.948 7.827-11.784 7.827-18.893V9.85h-10.59z"/><path d="M58.94 24.532v26.249c0 4.742-1.903 9.34-5.219 12.615-4.612 4.547-15.127 10.77-19.01 13-3.886-2.233-14.41-8.463-19.017-13.004-3.314-3.272-5.214-7.869-5.214-12.611V18.927h2.024c6.707 0 13.334-1.499 19.167-4.333a44.31 44.31 0 0 0 3.04-1.61c.972.565 2 1.11 3.064 1.623 5.814 2.826 12.434 4.32 19.141 4.32h2.024v5.605z"/></g></svg>`,
    logo:`<svg width="176" height="52" xmlns="http://www.w3.org/2000/svg"><g fill="#FFF" fill-rule="evenodd"><path d="M0 16.372v.128l29.754 13.764 29.859-13.811v-.035L29.754 2.608 0 16.372zm10.727.064l19.028-8.802 19.03 8.802-19.031 8.801-19.027-8.801zM29.754 35.61L0 22.052v5.014l29.754 13.59L59.613 27.02v-5.015L29.754 35.61zm0 10.17L0 32.22v5.015l29.754 13.591L59.613 37.19v-5.014L29.754 45.78zM169.216 26.22a8.564 8.564 0 0 0-2.285-5.892 7.675 7.675 0 0 0-2.473-1.768 7.259 7.259 0 0 0-3.015-.636 7.259 7.259 0 0 0-3.015.636 7.674 7.674 0 0 0-2.473 1.768 8.565 8.565 0 0 0-2.285 5.893 8.564 8.564 0 0 0 2.285 5.893 7.674 7.674 0 0 0 2.473 1.767 7.258 7.258 0 0 0 3.015.637 7.258 7.258 0 0 0 3.015-.637 7.675 7.675 0 0 0 2.473-1.767 8.563 8.563 0 0 0 2.285-5.893zm6.784 0c0 2.044-.377 3.937-1.13 5.681a13.849 13.849 0 0 1-3.11 4.526c-1.319 1.273-2.866 2.279-4.64 3.017-1.775.739-3.667 1.108-5.677 1.108s-3.894-.37-5.653-1.108a14.659 14.659 0 0 1-4.617-3.04 14.116 14.116 0 0 1-3.11-4.55c-.753-1.744-1.13-3.622-1.13-5.633 0-1.98.385-3.842 1.154-5.586a14.718 14.718 0 0 1 3.133-4.573 14.457 14.457 0 0 1 4.617-3.064c1.759-.739 3.627-1.108 5.606-1.108 2.01 0 3.902.369 5.677 1.108 1.774.738 3.321 1.744 4.64 3.017 1.32 1.272 2.356 2.789 3.11 4.549.753 1.76 1.13 3.645 1.13 5.657zm-31.422 13.483a9.087 9.087 0 0 1-1.814.613 9.217 9.217 0 0 1-2.096.236c-1.005 0-1.971-.134-2.898-.4a6.347 6.347 0 0 1-2.426-1.297c-.69-.597-1.24-1.375-1.649-2.334-.408-.958-.612-2.113-.612-3.465V.717h6.925v31.16c0 1.132.228 1.91.683 2.334.456.425.997.637 1.625.637.786 0 1.54-.236 2.262-.707v5.562zM130.02 12.55l-12.249 32.386c-.91 2.42-2.104 4.164-3.58 5.233-1.476 1.068-3.235 1.603-5.277 1.603a8.4 8.4 0 0 1-1.036-.071 7.784 7.784 0 0 1-1.083-.212l-2.262-6.317a8.974 8.974 0 0 0 1.65.59 6.61 6.61 0 0 0 1.6.211c1.069 0 2.042-.243 2.922-.73.879-.488 1.554-1.391 2.025-2.711l.943-2.734-10.506-27.248h7.396l6.266 17.536 5.889-17.536h7.302zm-28.502-4.102H83.806v8.769h17.478v5.94H83.806v16.688h-7.16V2.179h24.873v6.27z"/></g></svg>`,
    pin: `<svg class="card-pin"  xmlns="http://www.w3.org/2000/svg"  height="35" viewBox="0 96 960 960" width="48"><path d="m586 608 60 57v22H491v188l-11 11-11-11V687H314v-22l58-57V290h-43v-22h300v22h-43v318Zm-242 57h270l-50-49V290H394v326l-50 49Zm135 0Z"/></svg>`,
    lightBolb: `<svg class="card-lightBolb" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6A4.997 4.997 0 0 1 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z"></path></svg>`,
    bell: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M18 17v-6c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v6H4v2h16v-2h-2zm-2 0H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6zm-4 5c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2z"></path></svg>`,
    tag: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M17.63 5.84C17.27 5.33 16.67 5 16 5L5 5.01C3.9 5.01 3 5.9 3 7v10c0 1.1.9 1.99 2 1.99L16 19c.67 0 1.27-.33 1.63-.84L22 12l-4.37-6.16zM16 17H5V7h11l3.55 5L16 17z"></path></svg>`,
    pencil: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20.41 4.94l-1.35-1.35c-.78-.78-2.05-.78-2.83 0L13.4 6.41 3 16.82V21h4.18l10.46-10.46 2.77-2.77c.79-.78.79-2.05 0-2.83zm-14 14.12L5 19v-1.36l9.82-9.82 1.41 1.41-9.82 9.83z"></path></svg>`,
    archive: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20.54 5.23l-1.39-1.68C18.88 3.21 18.47 3 18 3H6c-.47 0-.88.21-1.16.55L3.46 5.23C3.17 5.57 3 6.02 3 6.5V19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6.5c0-.48-.17-.93-.46-1.27zM6.24 5h11.52l.83 1H5.42l.82-1zM5 19V8h14v11H5zm11-5.5l-4 4-4-4 1.41-1.41L11 13.67V10h2v3.67l1.59-1.59L16 13.5z"></path></svg>`,
    bars: `<svg focusable="false" width="24" height="24" viewBox="0 0 24 24"><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path></svg>`,
    dots: `<svg class="gb_Ve" focusable="false" viewBox="0 0 24 24"><path d="M6,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM16,6c0,1.1 0.9,2 2,2s2,-0.9 2,-2 -0.9,-2 -2,-2 -2,0.9 -2,2zM12,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2z"></path></svg>`,
    settings: `<svg focusable="false" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M13.85 22.25h-3.7c-.74 0-1.36-.54-1.45-1.27l-.27-1.89c-.27-.14-.53-.29-.79-.46l-1.8.72c-.7.26-1.47-.03-1.81-.65L2.2 15.53c-.35-.66-.2-1.44.36-1.88l1.53-1.19c-.01-.15-.02-.3-.02-.46 0-.15.01-.31.02-.46l-1.52-1.19c-.59-.45-.74-1.26-.37-1.88l1.85-3.19c.34-.62 1.11-.9 1.79-.63l1.81.73c.26-.17.52-.32.78-.46l.27-1.91c.09-.7.71-1.25 1.44-1.25h3.7c.74 0 1.36.54 1.45 1.27l.27 1.89c.27.14.53.29.79.46l1.8-.72c.71-.26 1.48.03 1.82.65l1.84 3.18c.36.66.2 1.44-.36 1.88l-1.52 1.19c.01.15.02.3.02.46s-.01.31-.02.46l1.52 1.19c.56.45.72 1.23.37 1.86l-1.86 3.22c-.34.62-1.11.9-1.8.63l-1.8-.72c-.26.17-.52.32-.78.46l-.27 1.91c-.1.68-.72 1.22-1.46 1.22zm-3.23-2h2.76l.37-2.55.53-.22c.44-.18.88-.44 1.34-.78l.45-.34 2.38.96 1.38-2.4-2.03-1.58.07-.56c.03-.26.06-.51.06-.78s-.03-.53-.06-.78l-.07-.56 2.03-1.58-1.39-2.4-2.39.96-.45-.35c-.42-.32-.87-.58-1.33-.77l-.52-.22-.37-2.55h-2.76l-.37 2.55-.53.21c-.44.19-.88.44-1.34.79l-.45.33-2.38-.95-1.39 2.39 2.03 1.58-.07.56a7 7 0 0 0-.06.79c0 .26.02.53.06.78l.07.56-2.03 1.58 1.38 2.4 2.39-.96.45.35c.43.33.86.58 1.33.77l.53.22.38 2.55z"></path><circle cx="12" cy="12" r="3.5"></circle></svg>`,
    colorPicker: '<svg class="hxXJme-LgbsSe-hxXJme-edvN0e" height="100%" width="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18"><path class="hxXJme-Jt5cK" d="m0 0h18v18h-18z"></path><path class="gk6SMd-Jt5cK" d="m6.61 11.89l-3.11-3.11-1.06 1.06 4.17 4.16 8.95-8.95-1.06-1.05z"></path></svg>',
    vColorPicker: '<svg width="18" height="18" viewBox="0 0 24 24" focusable="false" class="hxXJme-LgbsSe-gk6SMd-g6cJHd NMm5M"><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"></path></svg>',
    location: '<svg xmlns="http://www.w3.org/2000/svg" height="18" width="18"><path d="M10 9.625q.542 0 .917-.375t.375-.917q0-.541-.375-.916T10 7.042q-.542 0-.917.375t-.375.916q0 .542.375.917t.917.375Zm0 7.125q2.583-2.25 3.958-4.49 1.375-2.239 1.375-3.76 0-2.458-1.541-3.979Q12.25 3 10 3T6.208 4.521Q4.667 6.042 4.667 8.5q0 1.521 1.375 3.76Q7.417 14.5 10 16.75Zm0 1.271q-3.167-2.854-4.708-5.219Q3.75 10.438 3.75 8.5q0-2.958 1.875-4.687Q7.5 2.083 10 2.083t4.375 1.73Q16.25 5.542 16.25 8.5q0 1.938-1.542 4.302-1.541 2.365-4.708 5.219ZM10 8.5Z"/></svg>',
    colorPickerNone: '<svg width="26" height="26" viewBox="0 0 24 24" focusable="false" class="zTETae-hxXJme-LgbsSe-Bz112c NMm5M"><path d="M21.19 21.19l-3.06-3.06-1.43-1.43-8.3-8.3L7 7 2.81 2.81 1.39 4.22l4.25 4.25A8.056 8.056 0 0 0 4.01 13H4c0 4.42 3.58 8 8 8 1.74 0 3.35-.57 4.66-1.51l3.12 3.12 1.41-1.42zM12 19c-3.22 0-5.86-2.55-5.99-5.74l.01-.19c.04-1.14.42-2.25 1.06-3.18l8.16 8.16c-.95.6-2.05.95-3.24.95zm0-14.17l4.25 4.24a6.014 6.014 0 0 1 1.74 4.01l.01.17c-.02.56-.13 1.11-.3 1.62l1.53 1.53c.49-1.03.77-2.18.77-3.4h-.01a7.975 7.975 0 0 0-2.33-5.35L12 2 8.41 5.58 9.83 7 12 4.83z"></path></svg>',
    checkBox: '<svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M10.6 15.5 17 9.1l-.7-.7-5.7 5.7-2.85-2.85-.7.7ZM5.625 20q-.7 0-1.162-.462Q4 19.075 4 18.375V5.625q0-.7.463-1.162Q4.925 4 5.625 4h12.75q.7 0 1.163.463.462.462.462 1.162v12.75q0 .7-.462 1.163-.463.462-1.163.462Zm0-1h12.75q.25 0 .437-.188.188-.187.188-.437V5.625q0-.25-.188-.437Q18.625 5 18.375 5H5.625q-.25 0-.437.188Q5 5.375 5 5.625v12.75q0 .25.188.437.187.188.437.188ZM5 5v14V5Z"/></svg>',
    img: `<svg class="cursur-pointer" xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M5.8 19.7q-.65 0-1.075-.425Q4.3 18.85 4.3 18.2V5.8q0-.65.425-1.075Q5.15 4.3 5.8 4.3h12.4q.65 0 1.075.425.425.425.425 1.075v12.4q0 .65-.425 1.075-.425.425-1.075.425Zm0-.7h12.4q.3 0 .55-.25.25-.25.25-.55V5.8q0-.3-.25-.55Q18.5 5 18.2 5H5.8q-.3 0-.55.25Q5 5.5 5 5.8v12.4q0 .3.25.55.25.25.55.25Zm2.15-2.65h8.3l-2.55-3.4-2.5 3.1-1.6-1.85ZM5 19V5 19Z"/></svg>`,
    pencil2: `<svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M6.5 19.2q-.425 0-.85-.1t-.8-.3q.45-.425.7-.988.25-.562.25-1.312 0-.725.488-1.213.487-.487 1.212-.487t1.213.487q.487.488.487 1.213 0 1.125-.787 1.913-.788.787-1.913.787Zm0-.7q.825 0 1.412-.587.588-.588.588-1.413 0-.425-.287-.713-.288-.287-.713-.287t-.713.287q-.287.288-.287.713 0 .575-.137 1.05-.138.475-.363.9.125.05.25.05h.25Zm4.6-4.15-1.4-1.4L17.65 5q.275-.275.687-.288.413-.012.713.288t.3.7q0 .4-.3.7ZM7.5 16.5Z"/></svg>`,
    paint: '<svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M11 20.95q-.3 0-.5-.2t-.2-.5v-5.8H7q-.65 0-1.075-.425Q5.5 13.6 5.5 12.95v-6.7q0-.9.65-1.55t1.55-.65h10.8v8.9q0 .65-.425 1.075-.425.425-1.075.425h-3.3v5.8q0 .3-.2.5t-.5.2Zm-4.8-10.4h11.6v-5.8h-1.75V8.5h-.7V4.75h-2v2h-.7v-2H7.7q-.65 0-1.075.425Q6.2 5.6 6.2 6.25Zm.8 3.2h10q.35 0 .575-.225.225-.225.225-.575v-1.7H6.2v1.7q0 .35.225.575.225.225.575.225Zm-.8-2.5v2.5V12.95Z"/></svg>',
    text1: '<svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M10.3 7.65h7.05v-.7H10.3Zm0 2.7h7.05v-.7H10.3Zm0 2.7h4.05v-.7H10.3ZM7.2 8q.275 0 .488-.213.212-.212.212-.487t-.212-.488Q7.475 6.6 7.2 6.6t-.487.212Q6.5 7.025 6.5 7.3t.213.487Q6.925 8 7.2 8Zm0 2.7q.275 0 .488-.213.212-.212.212-.487t-.212-.488Q7.475 9.3 7.2 9.3t-.487.212Q6.5 9.725 6.5 10t.213.487q.212.213.487.213Zm0 2.7q.275 0 .488-.212.212-.213.212-.488t-.212-.488Q7.475 12 7.2 12t-.487.212q-.213.213-.213.488t.213.488q.212.212.487.212Zm-3.9 6.1V4.8q0-.65.425-1.075Q4.15 3.3 4.8 3.3h14.4q.65 0 1.075.425.425.425.425 1.075v10.4q0 .65-.425 1.075-.425.425-1.075.425H6.1Zm.7-1.7L5.8 16h13.4q.35 0 .575-.225Q20 15.55 20 15.2V4.8q0-.35-.225-.575Q19.55 4 19.2 4H4.8q-.35 0-.575.225Q4 4.45 4 4.8Zm0-13V4v13.8Z"/></svg>',
    text2: '<svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M6.5 19.2q-.425 0-.85-.1t-.8-.3q.45-.425.7-.988.25-.562.25-1.312 0-.725.488-1.213.487-.487 1.212-.487t1.213.487q.487.488.487 1.213 0 1.125-.787 1.913-.788.787-1.913.787Zm0-.7q.825 0 1.412-.587.588-.588.588-1.413 0-.425-.287-.713-.288-.287-.713-.287t-.713.287q-.287.288-.287.713 0 .575-.137 1.05-.138.475-.363.9.125.05.25.05h.25Zm4.6-4.15-1.4-1.4L17.65 5q.275-.275.687-.288.413-.012.713.288t.3.7q0 .4-.3.7ZM7.5 16.5Z"/></svg>',
    mail: '<svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M4.8 18.7q-.65 0-1.075-.425Q3.3 17.85 3.3 17.2V6.8q0-.65.425-1.075Q4.15 5.3 4.8 5.3h14.4q.65 0 1.075.425.425.425.425 1.075v10.4q0 .65-.425 1.075-.425.425-1.075.425Zm7.2-6.85-8-5.3V17.2q0 .35.225.575Q4.45 18 4.8 18h14.4q.35 0 .575-.225Q20 17.55 20 17.2V6.55Zm0-.85 7.6-5H4.4ZM4 6.55V6 17.2q0 .35.225.575Q4.45 18 4.8 18H4V17.2Z"/></svg>',
    more: 'data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWw6c3BhY2U9InByZXNlcnZlIiB2ZXJzaW9uPSIxLjEiIHk9IjBweCIgeD0iMHB4IiB2aWV3Qm94PSIwIDAgMTggMTgiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDE4IDE4IiAgZmlsbD0iIzAwMCI+CiAgPHBhdGggZD0ibTkgNS41YzEgMCAxLjgtMC44IDEuOC0xLjhzLTAuOC0xLjctMS44LTEuNy0xLjggMC44LTEuOCAxLjggMC44IDEuNyAxLjggMS43em0wIDEuN2MtMSAwLTEuOCAwLjgtMS44IDEuOHMwLjggMS44IDEuOCAxLjggMS44LTAuOCAxLjgtMS44LTAuOC0xLjgtMS44LTEuOHptMCA1LjNjLTEgMC0xLjggMC44LTEuOCAxLjhzMC44IDEuNyAxLjggMS43IDEuOC0wLjggMS44LTEuOC0wLjgtMS43LTEuOC0xLjd6Ii8+Cjwvc3ZnPgo=',
    deleteForever: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNHB4IiBoZWlnaHQ9IjI0cHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0iIzAwMDAwMCI+CiAgICA8cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDBWMHoiLz4KICAgIDxwYXRoIGQ9Ik02IDE5YzAgMS4xLjkgMiAyIDJoOGMxLjEgMCAyLS45IDItMlY3SDZ2MTJ6bTIuNDYtNy4xMmwxLjQxLTEuNDFMMTIgMTIuNTlsMi4xMi0yLjEyIDEuNDEgMS40MUwxMy40MSAxNGwyLjEyIDIuMTItMS40MSAxLjQxTDEyIDE1LjQxbC0yLjEyIDIuMTItMS40MS0xLjQxTDEwLjU5IDE0bC0yLjEzLTIuMTJ6TTE1LjUgNGwtMS0xaC01bC0xIDFINXYyaDE0VjR6Ii8+CiAgICA8cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDB6Ii8+Cjwvc3ZnPgo=',
    add: `data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSIjMDAwIj4KICA8cGF0aCBkPSJNOSAxMmMyLjIxIDAgNC0xLjc5IDQtNHMtMS43OS00LTQtNC00IDEuNzktNCA0IDEuNzkgNCA0IDR6bTAtNmMxLjEgMCAyIC45IDIgMnMtLjkgMi0yIDItMi0uOS0yLTIgLjktMiAyLTJ6bTAgN2MtMi42NyAwLTggMS4zNC04IDR2M2gxNnYtM2MwLTIuNjYtNS4zMy00LTgtNHptNiA1SDN2LS45OUMzLjIgMTYuMjkgNi4zIDE1IDkgMTVzNS44IDEuMjkgNiAydjF6bTMtNHYtM2gtM1Y5aDNWNmgydjNoM3YyaC0zdjNoLTJ6Ii8+Cjwvc3ZnPgo=`,
    plusBell: `data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSIjMDAwIj4KICA8cGF0aCBkPSJNMTMgOWgtMnYySDl2MmgydjJoMnYtMmgydi0yaC0yeiIvPgogIDxwYXRoIGQ9Ik0xOCAxN3YtNmMwLTMuMDctMS42My01LjY0LTQuNS02LjMyVjRjMC0uODMtLjY3LTEuNS0xLjUtMS41cy0xLjUuNjctMS41IDEuNXYuNjhDNy42NCA1LjM2IDYgNy45MiA2IDExdjZINHYyaDE2di0yaC0yem0tMiAwSDh2LTZjMC0yLjQ4IDEuNTEtNC41IDQtNC41czQgMi4wMiA0IDQuNXY2em0tNCA1YzEuMSAwIDItLjkgMi0yaC00YzAgMS4xLjkgMiAyIDJ6Ii8+Cjwvc3ZnPgo=`,
    colorPallet: `data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSIjMDAwIj4KICA8cGF0aCBkPSJNMTIgMjJDNi40OSAyMiAyIDE3LjUxIDIgMTJTNi40OSAyIDEyIDJzMTAgNC4wNCAxMCA5YzAgMy4zMS0yLjY5IDYtNiA2aC0xLjc3Yy0uMjggMC0uNS4yMi0uNS41IDAgLjEyLjA1LjIzLjEzLjMzLjQxLjQ3LjY0IDEuMDYuNjQgMS42N0EyLjUgMi41IDAgMCAxIDEyIDIyem0wLTE4Yy00LjQxIDAtOCAzLjU5LTggOHMzLjU5IDggOCA4Yy4yOCAwIC41LS4yMi41LS41YS41NC41NCAwIDAgMC0uMTQtLjM1Yy0uNDEtLjQ2LS42My0xLjA1LS42My0xLjY1YTIuNSAyLjUgMCAwIDEgMi41LTIuNUgxNmMyLjIxIDAgNC0xLjc5IDQtNCAwLTMuODYtMy41OS03LTgtN3oiLz48Y2lyY2xlIGN4PSI2LjUiIGN5PSIxMS41IiByPSIxLjUiLz4KICA8Y2lyY2xlIGN4PSI5LjUiIGN5PSI3LjUiIHI9IjEuNSIvPjxjaXJjbGUgY3g9IjE0LjUiIGN5PSI3LjUiIHI9IjEuNSIvPjxjaXJjbGUgY3g9IjE3LjUiIGN5PSIxMS41IiByPSIxLjUiLz4KPC9zdmc+Cg==`,
    bookMark: `data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICA8cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDB6Ii8+CiAgPHBhdGggZmlsbD0iIzAwMCIgZD0iTTE3IDRhMiAyIDAgMCAwLTItMkg5Yy0xLjEgMC0yIC45LTIgMnY3bC0yIDN2Mmg2djVsMSAxIDEtMXYtNWg2di0ybC0yLTNWNHoiLz4KPC9zdmc+Cg==`,
    bookMarkEmpty: `data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICA8cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDB6Ii8+CiAgPHBhdGggZmlsbD0iIzAwMCIgZD0iTTE3IDR2N2wyIDN2MmgtNnY1bC0xIDEtMS0xdi01SDV2LTJsMi0zVjRjMC0xLjEuOS0yIDItMmg2YzEuMTEgMCAyIC44OSAyIDJ6TTkgNHY3Ljc1TDcuNSAxNGg5TDE1IDExLjc1VjRIOXoiLz4KPC9zdmc+Cg==`,
    listDisplay: `data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjRweCIgaGVpZ2h0PSIyNHB4IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIGlkPSJsaXN0X3ZpZXdfMjRweCIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBvbHlnb24gaWQ9ImJvdW5kcyIgZmlsbC1vcGFjaXR5PSIwIiBmaWxsPSIjRkZGRkZGIiBwb2ludHM9IjAgMCAyNCAwIDI0IDI0IDAgMjQiPjwvcG9seWdvbj4KICAgICAgICA8cGF0aCBkPSJNMjAsOSBMNCw5IEw0LDUgTDIwLDUgTDIwLDkgWiBNMjAsMTkgTDQsMTkgTDQsMTUgTDIwLDE1IEwyMCwxOSBaIE0zLDMgQzIuNDUsMyAyLDMuNDUgMiw0IEwyLDEwIEMyLDEwLjU1IDIuNDUsMTEgMywxMSBMMjEsMTEgQzIxLjU1LDExIDIyLDEwLjU1IDIyLDEwIEwyMiw0IEMyMiwzLjQ1IDIxLjU1LDMgMjEsMyBMMywzIFogTTMsMTMgQzIuNDUsMTMgMiwxMy40NSAyLDE0IEwyLDIwIEMyLDIwLjU1IDIuNDUsMjEgMywyMSBMMjEsMjEgQzIxLjU1LDIxIDIyLDIwLjU1IDIyLDIwIEwyMiwxNCBDMjIsMTMuNDUgMjEuNTUsMTMgMjEsMTMgTDMsMTMgWiIgaWQ9Imljb24iIGZpbGw9IiMwMDAwMDAiIGZpbGwtcnVsZT0ibm9uemVybyI+PC9wYXRoPgogICAgPC9nPgo8L3N2Zz4K`,
    gridDisplay: `data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjRweCIgaGVpZ2h0PSIyNHB4IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8ZGVmcz4KICAgICAgICA8cGF0aCBkPSJNMywzIEwxMCwzIEMxMC41NSwzIDExLDMuNDUgMTEsNCBMMTEsMTAgQzExLDEwLjU1IDEwLjU1LDExIDEwLDExIEwzLDExIEMyLjQ1LDExIDIsMTAuNTUgMiwxMCBMMiw0IEMyLDMuNDUgMi40NSwzIDMsMyBaIE0zLDEzIEwxMCwxMyBDMTAuNTUsMTMgMTEsMTMuNDUgMTEsMTQgTDExLDIwIEMxMSwyMC41NSAxMC41NSwyMSAxMCwyMSBMMywyMSBDMi40NSwyMSAyLDIwLjU1IDIsMjAgTDIsMTQgQzIsMTMuNDUgMi40NSwxMyAzLDEzIFogTTE0LDMgTDIxLDMgQzIxLjU1LDMgMjIsMy40NSAyMiw0IEwyMiwxMCBDMjIsMTAuNTUgMjEuNTUsMTEgMjEsMTEgTDE0LDExIEMxMy40NSwxMSAxMywxMC41NSAxMywxMCBMMTMsNCBDMTMsMy40NSAxMy40NSwzIDE0LDMgWiBNMTQsMTMgTDIxLDEzIEMyMS41NSwxMyAyMiwxMy40NSAyMiwxNCBMMjIsMjAgQzIyLDIwLjU1IDIxLjU1LDIxIDIxLDIxIEwxNCwyMSBDMTMuNDUsMjEgMTMsMjAuNTUgMTMsMjAgTDEzLDE0IEMxMywxMy40NSAxMy40NSwxMyAxNCwxMyBaIE05LDkgTDksNSBMNCw1IEw0LDkgTDksOSBaIE05LDE5IEw5LDE1IEw0LDE1IEw0LDE5IEw5LDE5IFogTTIwLDkgTDIwLDUgTDE1LDUgTDE1LDkgTDIwLDkgWiBNMjAsMTkgTDIwLDE1IEwxNSwxNSBMMTUsMTkgTDIwLDE5IFoiIGlkPSJwYXRoLTEiPjwvcGF0aD4KICAgIDwvZGVmcz4KICAgIDxnIGlkPSJncmlkX3ZpZXdfMjRweCIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBvbHlnb24gaWQ9ImJvdW5kcyIgZmlsbC1vcGFjaXR5PSIwIiBmaWxsPSIjRkZGRkZGIiBwb2ludHM9IjAgMCAyNCAwIDI0IDI0IDAgMjQiPjwvcG9seWdvbj4KICAgICAgICA8bWFzayBpZD0ibWFzay0yIiBmaWxsPSJ3aGl0ZSI+CiAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj0iI3BhdGgtMSI+PC91c2U+CiAgICAgICAgPC9tYXNrPgogICAgICAgIDx1c2UgaWQ9Imljb24iIGZpbGw9IiMwMDAwMDAiIGZpbGwtcnVsZT0ibm9uemVybyIgeGxpbms6aHJlZj0iI3BhdGgtMSI+PC91c2U+CiAgICA8L2c+Cjwvc3ZnPgo=`,
    search: `<svg focusable="false" height="24px" viewBox="0 0 24 24" width="24px" xmlns="http://www.w3.org/2000/svg"><path d="M20.49,19l-5.73-5.73C15.53,12.2,16,10.91,16,9.5C16,5.91,13.09,3,9.5,3S3,5.91,3,9.5C3,13.09,5.91,16,9.5,16 c1.41,0,2.7-0.47,3.77-1.24L19,20.49L20.49,19z M5,9.5C5,7.01,7.01,5,9.5,5S14,7.01,14,9.5S11.99,14,9.5,14S5,11.99,5,9.5z"></path><path d="M0,0h24v24H0V0z" fill="none"></path></svg>`,
    inbox: '<svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48"><path d="M197.694 915.999q-23.529 0-40.611-17.082-17.082-17.082-17.082-40.611V293.694q0-23.529 17.082-40.611 17.082-17.082 40.611-17.082h564.612q23.529 0 40.611 17.082 17.082 17.082 17.082 40.611v564.612q0 23.529-17.082 40.611-17.082 17.082-40.611 17.082H197.694Zm0-45.384h564.612q5.385 0 8.847-3.462 3.462-3.462 3.462-8.847V731.153H623.999q-22.923 39.616-62.001 60.923-39.078 21.308-82.076 21.308-42.999 0-81.999-21.308-38.999-21.307-61.922-60.923H185.385v127.153q0 5.385 3.462 8.847 3.462 3.462 8.847 3.462ZM480.219 768q40.012 0 72.435-23.115T605 685.77h169.615V293.694q0-5.385-3.462-8.847-3.462-3.462-8.847-3.462H197.694q-5.385 0-8.847 3.462-3.462 3.462-3.462 8.847V685.77H355q19.923 36 52.565 59.115Q440.206 768 480.219 768ZM197.694 870.615h-12.309 589.23H197.694Z"/></svg>',
    palette: `<svg class="btn-color-picker"  xmlns ="http://www.w3.org/2000/svg" height="20" viewBox="0 96 960 960" width="48"><path d="M480 976q-82 0-155-31.5t-127.5-86Q143 804 111.5 731T80 576q0-85 32-158t87.5-127q55.5-54 130-84.5T489 176q79 0 150 26.5T763.5 276q53.5 47 85 111.5T880 529q0 108-63 170.5T650 762h-75q-18 0-31 14t-13 31q0 27 14.5 46t14.5 44q0 38-21 58.5T480 976Zm0-400Zm-233 26q20 0 35-15t15-35q0-20-15-35t-35-15q-20 0-35 15t-15 35q0 20 15 35t35 15Zm126-170q20 0 35-15t15-35q0-20-15-35t-35-15q-20 0-35 15t-15 35q0 20 15 35t35 15Zm214 0q20 0 35-15t15-35q0-20-15-35t-35-15q-20 0-35 15t-15 35q0 20 15 35t35 15Zm131 170q20 0 35-15t15-35q0-20-15-35t-35-15q-20 0-35 15t-15 35q0 20 15 35t35 15ZM480 916q11 0 15.5-4.5T500 897q0-14-14.5-26T471 818q0-46 30-81t76-35h73q76 0 123-44.5T820 529q0-132-100-212.5T489 236q-146 0-247.5 98.5T140 576q0 141 99.5 240.5T480 916Z"/></svg>`,
    youtube: `<svg class="cursur-pointer" xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 96 960 960" width="48"><path d="M616 814q-27 1-51.5 1.5t-43.5.5h-41q-71 0-133-2-53-2-104.5-5.5T168 799q-26-7-45-26t-26-45q-6-23-9.5-56T82 609q-2-36-2-73t2-73q2-30 5.5-63t9.5-56q7-26 26-45t45-26q23-6 74.5-9.5T347 258q62-2 133-2t133 2q53 2 104.5 5.5T792 273q26 7 45 26t26 45q6 23 9.5 56t5.5 63q2 36 2 73v17q-19-8-39-12.5t-41-4.5q-83 0-141.5 58.5T600 736q0 21 4 40.5t12 37.5ZM400 656l208-120-208-120v240Zm360 200v-80h-80v-80h80v-80h80v80h80v80h-80v80h-80Z"/></svg>`,
    check: `<svg class="cursur-pointer" xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 96 960 960" width="48"><path d="M378 810 154 586l43-43 181 181 384-384 43 43-427 427Z"/></svg>`,
    trash: `<svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 96 960 960" width="20"><path d="M261 936q-24.75 0-42.375-17.625T201 876V306h-41v-60h188v-30h264v30h188v60h-41v570q0 24-18 42t-42 18H261Zm438-630H261v570h438V306ZM367 790h60V391h-60v399Zm166 0h60V391h-60v399ZM261 306v570-570Z"/></svg>`,
    mail:`<svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 96 960 960" width="20"><path d="M140 896q-24 0-42-18t-18-42V316q0-24 18-42t42-18h680q24 0 42 18t18 42v520q0 24-18 42t-42 18H140Zm340-302L140 371v465h680V371L480 594Zm0-60 336-218H145l335 218ZM140 371v-55 520-465Z"/></svg>`,


    inbox: '<svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 96 960 960" width="20"><path d="M216 912q-29 0-50.5-21.5T144 840V312q0-29.7 21.5-50.85Q187 240 216 240h528q29.7 0 50.85 21.15Q816 282.3 816 312v528q0 29-21.15 50.5T744 912H216Zm0-72h528V696H632q-23 43-63.5 69.5T480 792q-49 0-89.5-26T328 696H216v144Zm264-120q40 0 68-28t28-68h168V312H216v312h168q0 40 28 68t68 28ZM216 840h528-528Z"/></svg>',
    inboxFill: '<svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 96 960 960" width="20"><path d="M216 912q-29 0-50.5-21.5T144 840V312q0-29.7 21.5-50.85Q187 240 216 240h528q29.7 0 50.85 21.15Q816 282.3 816 312v528q0 29-21.15 50.5T744 912H216Zm264-192q40 0 68-28t28-68h168V312H216v312h168q0 40 28 68t68 28Z"/></svg>',
    star: '<svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 96 960 960" width="20"><path d="m352 811 128-76 129 76-34-144 111-95-147-13-59-137-59 137-147 13 112 95-34 144ZM243 960l63-266L96 515l276-24 108-251 108 252 276 23-210 179 63 266-237-141-237 141Zm237-333Z"/></svg>',
    starFill: '<svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 96 960 960" width="20"><path d="m243 960 63-266L96 515l276-24 108-251 108 252 276 23-210 179 63 266-237-141-237 141Z"/></svg>',
    sent: `<svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 96 960 960" width="20"><path d="M144 864V288l720 288-720 288Zm72-107 454-181-454-181v109l216 72-216 72v109Zm0 0V395v362Z"/></svg>`,
    sentFill: `<svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 96 960 960" width="20"><path d="M144 864V672l288-96-288-96V288l720 288-720 288Z"/></svg>`,
    drafts: '<svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 96 960 960" width="20"><path d="M263.717 960Q234 960 213 938.85T192 888V264q0-29.7 21.15-50.85Q234.3 192 264 192h312l192 192v504q0 29.7-21.162 50.85Q725.676 960 695.96 960H263.717ZM528 432V264H264v624h432V432H528ZM264 264v189-189 624-624Z"/></svg>',
    draftsFill: '<svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 96 960 960" width="20"><path d="M263.717 960Q234 960 213 938.85T192 888V264q0-29.7 21.15-50.85Q234.3 192 264 192h312l192 192v504q0 29.7-21.162 50.85Q725.676 960 695.96 960H263.717ZM528 432h168L528 264v168Z"/></svg>',
    compose: `<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 96 960 960" width="24"><path d="M200 856h56l345-345-56-56-345 345v56Zm572-403L602 285l56-56q23-23 56.5-23t56.5 23l56 56q23 23 24 55.5T829 396l-57 57Zm-58 59L290 936H120V766l424-424 170 170Zm-141-29-28-28 56 56-28-28Z"/></svg>`,
    close: `<svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 96 960 960" width="20"><path d="m291 816-51-51 189-189-189-189 51-51 189 189 189-189 51 51-189 189 189 189-51 51-189-189-189 189Z"/></svg>`,
    checkBox: `<svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 96 960 960" width="20"><path d="M228.309 891.999q-27.008 0-45.658-18.65-18.65-18.65-18.65-45.658V324.309q0-27.008 18.65-45.658 18.65-18.65 45.658-18.65h503.382q27.008 0 45.658 18.65 18.65 18.65 18.65 45.658v503.382q0 27.008-18.65 45.658-18.65 18.65-45.658 18.65H228.309Zm0-51.999h503.382q4.616 0 8.463-3.846 3.846-3.847 3.846-8.463V324.309q0-4.616-3.846-8.463-3.847-3.846-8.463-3.846H228.309q-4.616 0-8.463 3.846-3.846 3.847-3.846 8.463v503.382q0 4.616 3.846 8.463 3.847 3.846 8.463 3.846Z"/></svg>`,
    checkBoxFill: `<svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 96 960 960" width="20"><path d="m429 706.153 224.922-223.922-37.153-37.153L429 631.847l-85-84L306.847 585 429 706.153ZM228.309 891.999q-27.008 0-45.658-18.65-18.65-18.65-18.65-45.658V324.309q0-27.008 18.65-45.658 18.65-18.65 45.658-18.65h503.382q27.008 0 45.658 18.65 18.65 18.65 18.65 45.658v503.382q0 27.008-18.65 45.658-18.65 18.65-45.658 18.65H228.309Zm0-51.999h503.382q4.616 0 8.463-3.846 3.846-3.847 3.846-8.463V324.309q0-4.616-3.846-8.463-3.847-3.846-8.463-3.846H228.309q-4.616 0-8.463 3.846-3.846 3.847-3.846 8.463v503.382q0 4.616 3.846 8.463 3.847 3.846 8.463 3.846ZM216 312v528-528Z"/></svg>`,
    toggleOff: `<svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48"><path d="M280 816q-100 0-170-70T40 576q0-100 70-170t170-70h400q100 0 170 70t70 170q0 100-70 170t-170 70H280Zm0-60h400q75 0 127.5-52.5T860 576q0-75-52.5-127.5T680 396H280q-75 0-127.5 52.5T100 576q0 75 52.5 127.5T280 756Zm-1.059-79Q321 677 350.5 647.559t29.5-71.5Q380 534 350.559 504.5t-71.5-29.5Q237 475 207.5 504.441t-29.5 71.5Q178 618 207.441 647.5t71.5 29.5ZM480 576Z"/></svg>`
}

function getSvg(iconName) {
    return svgs[iconName]
}

// function getMailSvg(iconName) {
//     return mailSvgs[iconName]
// }

export const svgService = { getSvg }

// in template
// <div className="icon" v-html="getSvg('bars')"></div>
// <img style="width:24px; height:24px" :src="getSvg('add')" alt="" />

// in methodes
// function getSvg(iconName) {
//     return svgService.getSvg(iconName)
//   }