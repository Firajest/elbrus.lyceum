import React from 'react'
import './index.css'

export default function Footer() {
  return (
    <>
      <footer class="footer">
        <div class='icons'>
          <a target="_blank" href="https://www.facebook.com/elbrusbootcamp">
            <img id='icon' src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAxMS4xIDIyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxMS4xIDIyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6I0ZGQkM1Qjt9Cjwvc3R5bGU+CjxnPgoJPHBhdGggY2xhc3M9InN0MCIgZD0iTTcuNiwyMkgxLjhWMTEuNUgwVjdoMS44VjUuMkMxLjgsMS43LDMuNSwwLDcsMGg0djQuNUg4LjVjLTAuOSwwLTAuOSwwLjEtMC45LDFsMCwxLjVoMy4zbC0wLjUsNC41SDcuNlYyMnoKCQkgTTIuOCwyMWgzLjdWMTAuNWgyLjlMOS43LDhINi42bDAtMi41YzAtMSwwLjEtMS45LDEuOS0xLjloMS41VjFIN2MtMywwLTQuMiwxLjMtNC4yLDQuMlY4SDF2Mi41aDEuOFYyMXoiLz4KPC9nPgo8L3N2Zz4K" alt="Facebook" />
          </a>
          <a target="_blank" href="https://vk.com/elbrusbootcamp">
            <img id='icon' src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAyNi42IDE2LjUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDI2LjYgMTYuNTsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiNGRkJDNUI7fQo8L3N0eWxlPgo8Zz4KCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0yNC45LDE2LjVoLTMuMWMtMS4yLDAtMS43LTAuNi0yLjQtMS40TDE5LjMsMTVjLTAuMy0wLjQtMC44LTAuOS0xLjMtMS4zYy0wLjYtMC41LTEtMC44LTEuMy0xLjF2MS44CgkJYzAsMi4xLTIuMiwyLjEtMy4yLDIuMWMtMy4yLDAtNi41LTEuOS04LjktNS4yQzEuMSw2LjcsMCwyLjksMCwxLjhDMCwwLjgsMC44LDAsMS44LDBoMi44QzUuOCwwLDYuNSwwLjUsNywxLjcKCQlDNy44LDQuMiw4LjksNiw5LjcsNy4xVjQuM2MwLTAuNy0wLjItMS0wLjUtMS4yTDkuMSwyLjhDOC45LDIuNiw4LjYsMi4yLDguNiwxLjZDOC42LDAuNyw5LjMsMCwxMC4zLDBoNC41YzEuOCwwLDEuOCwxLjUsMS44LDIuMQoJCXY0YzEuNS0xLjcsMi41LTQsMi43LTQuNGwwLTAuMWMwLjMtMC45LDEtMS4zLDIuMS0xLjNoMi44YzAuNiwwLDEuMSwwLjIsMS41LDAuNUMyNiwxLjEsMjYuMSwxLjcsMjYsMi4zYy0wLjMsMS41LTIuNiw0LjktMy41LDYKCQljMCwwLjEtMC4yLDAuMi0wLjIsMC4zYzAsMC4xLDAuMSwwLjIsMC40LDAuNGMwLjQsMC40LDAuOSwwLjksMS4zLDEuNGMyLjIsMi4zLDIuNSwzLjQsMi41LDQuMUMyNi42LDE1LjcsMjUuOSwxNi41LDI0LjksMTYuNXoKCQkgTTE1LjgsMTEuM2MwLjEtMC4xLDAuNSwwLjEsMC41LDAuMWMwLjMsMC4xLDAuOSwwLjMsMi4zLDEuNmMwLjYsMC41LDEuMSwxLDEuNSwxLjVsMCwwLjFjMC42LDAuNywwLjksMSwxLjcsMWgzLjEKCQljMC42LDAsMC43LTAuNiwwLjctMC45YzAtMC43LTAuOC0xLjktMi4zLTMuNWMtMC40LTAuNS0wLjktMS0xLjMtMS40Yy0wLjItMC4yLTAuNC0wLjQtMC42LTAuN2MtMC4xLTAuMi0wLjItMC40LTAuMi0wLjYKCQljMC0wLjMsMC40LTAuOCwwLjUtMC45YzAuOS0xLjMsMi45LTQuMywzLjItNS41YzAuMS0wLjQsMC0wLjYtMC4xLTAuNmMtMC4xLTAuMS0wLjMtMC4zLTAuNy0wLjNoLTIuOGMtMC44LDAtMSwwLjMtMS4xLDAuN2wwLDAKCQlDMjAsMi42LDE4LjgsNSwxNy40LDYuN2MtMC4xLDAuMS0wLjQsMC41LTAuOCwxQzE2LjIsOCwxNS44LDgsMTUuNyw3LjljLTAuMi0wLjEtMC4xLTAuNi0wLjEtMC42VjIuMWMwLTAuOC0wLjEtMS4xLTAuOC0xLjFoLTQuNQoJCUM5LjksMSw5LjYsMS4zLDkuNiwxLjZjMCwwLjIsMC4xLDAuNCwwLjMsMC42TDEwLDIuNGMwLjMsMC4zLDAuNywwLjgsMC43LDEuOXY0LjNjMCwwLDAsMC41LTAuMSwwLjVjLTAuMiwwLTAuNy0wLjQtMC43LTAuNAoJCUM5LDgsNy4xLDUuNSw2LDIuMUM1LjcsMS4zLDUuNCwxLDQuNiwxSDEuOEMxLjQsMSwxLDEuMywxLDEuOGMwLDAuOCwxLDQuNSw0LjQsOC45YzIuMiwzLDUuMyw0LjgsOC4xLDQuOGMxLjQsMCwyLjItMC4yLDIuMi0xLjEKCQl2LTIuN0MxNS43LDExLjcsMTUuNywxMS4zLDE1LjgsMTEuM3ogTTIyLjQsOC41QzIyLjQsOC41LDIyLjQsOC41LDIyLjQsOC41TDIyLjQsOC41QzIyLjQsOC41LDIyLjQsOC41LDIyLjQsOC41eiIvPgo8L2c+CjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0tMS4zLDEzLjZMLTEuMywxMy42TC0xLjMsMTMuNnoiLz4KPC9zdmc+Cg==" alt="Вконтакте" />
          </a>
          <a target="_blank" href="https://www.instagram.com/elbrus.bootcamp/">
            <img id='icon' src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAxOC42IDE5LjEiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDE4LjYgMTkuMTsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiNGRkJDNUI7fQo8L3N0eWxlPgo8Zz4KCTxnPgoJCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0xNCwxOS4xSDQuN0MyLjEsMTkuMSwwLDE3LDAsMTQuNFY0LjdDMCwyLjEsMi4xLDAsNC43LDBIMTRjMi42LDAsNC43LDIuMSw0LjcsNC43djkuNwoJCQlDMTguNiwxNywxNi41LDE5LjEsMTQsMTkuMXogTTQuNywxQzIuNywxLDEsMi43LDEsNC43djkuN2MwLDIsMS43LDMuNywzLjcsMy43SDE0YzIsMCwzLjctMS43LDMuNy0zLjdWNC43QzE3LjYsMi43LDE2LDEsMTQsMQoJCQlINC43eiIvPgoJPC9nPgoJPGc+CgkJPHBhdGggY2xhc3M9InN0MCIgZD0iTTE1LDcuNGMtMC45LDAtMS42LTAuNy0xLjYtMS42YzAtMC45LDAuNy0xLjYsMS42LTEuNnMxLjYsMC43LDEuNiwxLjZDMTYuNiw2LjYsMTUuOSw3LjQsMTUsNy40eiBNMTUsNS4xCgkJCWMtMC4zLDAtMC42LDAuMy0wLjYsMC42YzAsMC4zLDAuMywwLjYsMC42LDAuNnMwLjYtMC4zLDAuNi0wLjZDMTUuNiw1LjQsMTUuMyw1LjEsMTUsNS4xeiIvPgoJPC9nPgoJPGc+CgkJPHBhdGggY2xhc3M9InN0MCIgZD0iTTkuMywxMy45Yy0yLjQsMC00LjQtMi00LjQtNC40YzAtMi40LDItNC40LDQuNC00LjRzNC40LDIsNC40LDQuNEMxMy43LDEyLDExLjcsMTMuOSw5LjMsMTMuOXogTTkuMyw2LjIKCQkJYy0xLjksMC0zLjQsMS41LTMuNCwzLjRjMCwxLjksMS41LDMuNCwzLjQsMy40YzEuOSwwLDMuNC0xLjUsMy40LTMuNEMxMi43LDcuNywxMS4xLDYuMiw5LjMsNi4yeiIvPgoJPC9nPgo8L2c+Cjwvc3ZnPgo=" alt="Instagram" />
          </a>
          <a target="_blank" href="https://www.youtube.com/channel/UCaKZxz2d1KI-wN3l6fX7zdQ/featured">
            <img id='icon' src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzMiIGhlaWdodD0iMjMiIHZpZXdCb3g9IjAgMCAzMyAyMyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE2LjIgMjNDMTUuOCAyMyA2LjMgMjMgMy44IDIyLjNDMi4zIDIxLjkgMS4xIDIwLjcgMC43IDE5LjJDMCAxNi43IDAgMTEuNyAwIDExLjVDMCAxMS4zIDAgNi4zIDAuNyAzLjhDMS4xIDIuMyAyLjMgMS4xIDMuOCAwLjdDNi4zIDAgMTUuOCAwIDE2LjIgMEMxNi42IDAgMjYuMSAwIDI4LjYgMC43QzMwLjEgMS4xIDMxLjMgMi4zIDMxLjcgMy44QzMyLjQgNi4zIDMyLjQgMTEuMyAzMi40IDExLjVDMzIuNCAxMS43IDMyLjQgMTYuNyAzMS43IDE5LjJDMzEuMyAyMC43IDMwLjEgMjEuOSAyOC42IDIyLjNDMjYuMSAyMyAxNi42IDIzIDE2LjIgMjNaTTE2LjIgMUMxNi4xIDEgNi40IDEgNCAxLjZDMi45IDEuOSAxLjkgMi45IDEuNiA0LjFDMSA2LjQgMSAxMS40IDEgMTEuNUMxIDExLjYgMSAxNi42IDEuNiAxOC45QzEuOSAyMC4xIDIuOSAyMSA0IDIxLjNDNi40IDIyIDE2LjEgMjIgMTYuMiAyMkMxNi4zIDIyIDI2IDIyIDI4LjQgMjEuNEMyOS42IDIxLjEgMzAuNSAyMC4yIDMwLjggMTlDMzEuNCAxNi42IDMxLjQgMTEuNiAzMS40IDExLjZDMzEuNCAxMS41IDMxLjQgNi41IDMwLjggNC4xQzMwLjUgMi45IDI5LjYgMiAyOC40IDEuN0MyNiAxIDE2LjMgMSAxNi4yIDFaIiBmaWxsPSIjRkZCQzVCIi8+CjxwYXRoIGQ9Ik0xMi42IDE3LjFWNS45TDIyLjMgMTEuNUwxMi42IDE3LjFaTTEzLjYgNy43VjE1LjRMMjAuMyAxMS42TDEzLjYgNy43WiIgZmlsbD0iI0ZGQkM1QiIvPgo8L3N2Zz4K" alt="Youtube" />
          </a>
        </div>
        <div class='footertext'>
          <div class="footertextleft">
            <a class="ateg" href="tel:+74957860581">+7 495 786-05-81</a>
            <p>
              <a class="ateg" target="_blank" href="https://wa.me/74957860581">ЧАТ В WHATSAPP{' '}</a>
              <a class="ateg" target="_blank" href="https://t.me/joinchat/CDWhPUyGEQ9Swb6z7-6UjQ">{' '}Elbrus family</a>
            </p>
            <p>
              <a class="ateg" href="tel:join@elbrusboot.camp">join@elbrusboot.camp</a>
              <p></p>
              <a class="ateg" target="_blank" href="/contract.pdf">Договор-Оферта</a>
              <br />
              <a class="ateg" target="_blank" href="/confidentiality_agreements.pdf">Политика конфиденциальности</a>
            </p>
          </div>
          <div class='footertextright'>
            <p>1</p>
            <p>2</p>
            <p>3</p>
          </div>
          <div>


          </div>
        </div>
      </footer>
    </>
  )

}
