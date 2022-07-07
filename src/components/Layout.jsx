import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Newsletter from '@/components/Newsletter'

export default function Layout({ children }) {
  return (
    <>
      <div className="relative overflow-hidden bg-gray-50">
        <Header />
        <main className="relative">
            {children}
        </main>
        <Newsletter />
        <Footer />
      </div>
    </>
  )
}
