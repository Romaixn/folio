import { Head, Html, Main, NextScript } from 'next/document'

export default function Document(props) {
  let pageProps = props.__NEXT_DATA__?.props?.pageProps

  return (
    <Html className="h-full" lang="fr">
      <Head />
      <body className="h-full">
        <Main />
        <script type="text/javascript">
          var DIGITAL_STRIKE_OPTIONS = {
            websiteName: 'rherault.fr',
            /**
             * Afficher le widget en mode footer en dehors des dates prévues (voir fullPageDisplayStartDate)
             * false par défault: affichage en mode "full page" tous les jours
             */
            minMode: true, // @type {boolean}
            /**
             * Date à partir de laquelle doit s'afficher le widget en mode footer
             * ⚠️ Janvier = 0, Décembre = 11 (mois - 1)
             */
            footerDisplayStartDate: new Date(2023, 2, 8), //@ type {Date object}

            /**
             * En mode min, date à laquelle le footer doit s'afficher en pleine page, pour 24 heures. 
             */
            fullPageDisplayStartDate: new Date(2023, 2, 7), //@ type {Date object}
          };
        </script>
        <script src="https://onestla.tech/widget-engreve/widget.js" async></script>
        <NextScript />
      </body>
    </Html>
  )
}
