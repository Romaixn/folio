import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Newsletter from '@/components/Newsletter'

export default function Layout({ children }) {
  return (
    <>
      <div className="relative overflow-hidden">
        <Header />
        <main className="relative">
            {children}
        </main>
        <Footer />
      </div>
    </>
  )
}
