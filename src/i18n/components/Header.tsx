import { useTranslation } from 'react-i18next'

const Header = () => {
  const [t, i18n] = useTranslation('global')

  const handleChangeLanguage = (language: string) => {
    i18n.changeLanguage(language)
  }
  return (
    <div>
      <p>{t("header.title")}</p>

      <button onClick={() => handleChangeLanguage('en')}>EN</button>
      <button onClick={() => handleChangeLanguage('es')}>ES</button>
    </div>
  )
}

export default Header