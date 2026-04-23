/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
  Car, 
  MapPin, 
  Flag, 
  Calendar, 
  Search, 
  ShieldCheck, 
  CreditCard, 
  Clock, 
  Headphones, 
  Smile, 
  User, 
  Luggage, 
  Wind, 
  Wifi, 
  Mic, 
  Users,
  CircleCheck,
  PhoneCall,
  Mail,
  Send,
  Ticket,
  Menu,
  ChevronRight,
  Facebook,
  Linkedin,
  Instagram
} from 'lucide-react';
import { motion } from 'motion/react';

const CAR_DATA = [
  {
    id: 1,
    name: 'Xe 4 Chỗ (Sedan)',
    description: 'Vios, Accent, City đời mới. Phù hợp cho gia đình nhỏ hoặc công tác.',
    image: 'https://images.unsplash.com/photo-1550355291-bbee04a92027?q=80&w=1000&auto=format&fit=crop',
    price: '250.000₫',
    features: [
      { icon: User, text: '4' },
      { icon: Luggage, text: '2' },
      { icon: Wind, text: 'Có' }
    ],
    tag: 'Phổ biến'
  },
  {
    id: 2,
    name: 'Xe 7 Chỗ (SUV)',
    description: 'Innova, Fortuner rộng rãi. Thoải mái cho nhóm bạn và nhiều hành lý.',
    image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=1000&auto=format&fit=crop',
    price: '350.000₫',
    features: [
      { icon: User, text: '7' },
      { icon: Luggage, text: '4' },
      { icon: Wifi, text: 'Free' }
    ],
    tag: null
  },
  {
    id: 3,
    name: 'Xe 16 Chỗ',
    description: 'Ford Transit, Solati đời mới. Phù hợp cho đoàn du lịch, công ty.',
    image: 'https://images.unsplash.com/photo-1527786357983-ef455642e67f?q=80&w=1000&auto=format&fit=crop',
    price: '550.000₫',
    features: [
      { icon: Users, text: '16' },
      { icon: Luggage, text: '10' },
      { icon: Mic, text: 'Karaoke' }
    ],
    tag: null
  },
  {
    id: 4,
    name: 'Limousine VIP',
    description: 'Dcar Limousine 9 chỗ thượng hạng. Ghế massage, không gian riêng tư.',
    image: 'https://images.unsplash.com/photo-1562622611-546059c19b02?q=80&w=1000&auto=format&fit=crop',
    price: '800.000₫',
    features: [
      { icon: Car, text: '9' },
      { icon: Smile, text: 'Massage' },
      { icon: Wind, text: 'Nước' }
    ],
    tag: 'VIP'
  }
];

const TOUR_PRICING = [
  { route: 'Sân bay Đà Nẵng → Hội An', type: 'Xe 4 chỗ', pax: '1-3', time: '~45 phút', price: '250.000₫', promo: '10% vé Bà Nà' },
  { route: 'Đà Nẵng → Bà Nà Hills', type: 'Xe 7 chỗ', pax: '1-6', time: '~1 giờ', price: '400.000₫', promo: 'Giảm 5% vé Cầu Vàng' },
  { route: 'Tham quan Hội An (4 tiếng)', type: 'Xe 4 chỗ', pax: '1-3', time: '4 giờ', price: '300.000₫', promo: 'Ẩm thực 50k' },
  { route: 'Tour Cố Đô Huế (1 ngày)', type: 'Xe 16 chỗ', pax: '7-15', time: '8-10 giờ', price: '1.200.000₫', promo: 'Miễn phí HDV' },
  { route: 'Sân bay Đà Nẵng → Huế', type: 'Limousine VIP', pax: '1-7', time: '~2 giờ', price: '1.500.000₫', promo: 'Nước uống, khăn lạnh' }
];

export default function App() {
  return (
    <div className="min-h-screen flex flex-col font-body">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-3">
              <div className="size-10 bg-primary rounded-lg flex items-center justify-center text-white">
                <Car className="size-6" />
              </div>
              <div className="flex flex-col">
                <span className="text-primary font-display font-bold text-xl leading-none">DANANG</span>
                <span className="text-secondary font-display font-bold text-sm tracking-widest leading-tight">TRAVEL</span>
              </div>
            </div>
            
            <nav className="hidden md:flex items-center gap-8">
              <a href="#" className="text-primary font-semibold hover:text-secondary transition-colors">Trang chủ</a>
              <a href="#" className="text-secondary font-bold">Đặt xe</a>
              <a href="#" className="text-primary font-semibold hover:text-secondary transition-colors">Vé tham quan</a>
              <a href="#" className="text-primary font-semibold hover:text-secondary transition-colors">Tin tức</a>
              <a href="#" className="text-primary font-semibold hover:text-secondary transition-colors">Liên hệ</a>
            </nav>
            
            <div className="flex items-center gap-6">
              <div className="hidden lg:flex items-center gap-2 text-primary font-medium text-sm">
                <PhoneCall className="size-4 text-secondary" />
                <span>1900 123 456</span>
              </div>
              <button className="bg-primary hover:bg-opacity-90 text-white px-6 py-2.5 rounded-lg font-display font-bold text-sm transition-all shadow-md">
                Đăng nhập
              </button>
              <button className="md:hidden text-primary">
                <Menu className="size-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1582236357422-54070732813c?q=80&w=2000&auto=format&fit=crop" 
            alt="Danang City" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/40"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className="max-w-3xl mb-12 animate-in fade-in slide-in-from-left-8 duration-700">
            <span className="inline-block py-1 px-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-semibold mb-4">
              ✨ Dịch vụ vận chuyển du lịch uy tín hàng đầu
            </span>
            <h1 className="font-display font-black text-4xl md:text-5xl lg:text-7xl text-white mb-6 leading-tight">
              Vi vu <span className="text-accent">Hội An - Đà Nẵng</span><br />Trọn vẹn mọi hành trình
            </h1>
            <p className="text-white/90 text-lg font-medium max-w-xl">
              Đặt xe dễ dàng, giá cả minh bạch, đưa đón tận nơi. Trải nghiệm dịch vụ chuẩn 5 sao với đội ngũ tài xế chuyên nghiệp.
            </p>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-2xl shadow-2xl p-6 md:p-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="space-y-2">
                <label className="text-primary font-bold text-sm flex items-center gap-1.5">
                  <MapPin className="size-4 text-secondary" /> Điểm đón
                </label>
                <input 
                  type="text" 
                  placeholder="Sân bay, Khách sạn..." 
                  className="w-full p-3 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-primary font-bold text-sm flex items-center gap-1.5">
                  <Flag className="size-4 text-secondary" /> Điểm đến
                </label>
                <input 
                  type="text" 
                  placeholder="Hội An, Bà Nà..." 
                  className="w-full p-3 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-primary font-bold text-sm flex items-center gap-1.5">
                  <Calendar className="size-4 text-secondary" /> Ngày khởi hành
                </label>
                <input 
                  type="datetime-local" 
                  className="w-full p-3 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all"
                />
              </div>
              <div className="flex items-end">
                <button className="w-full h-[50px] bg-accent hover:bg-opacity-90 text-white font-display font-bold rounded-xl shadow-lg flex items-center justify-center gap-2 transition-all transform hover:-translate-y-0.5">
                  <Search className="size-5" /> Tìm Chuyến Xe
                </button>
              </div>
            </div>
            
            <div className="mt-6 flex flex-wrap gap-4 items-center border-t border-gray-50 pt-5">
              <span className="text-sm font-semibold text-gray-500">Phổ biến:</span>
              {['Sân Bay → Hội An', 'Đà Nẵng → Bà Nà Hills', 'Thuê xe 4 chỗ'].map((item) => (
                <button key={item} className="px-4 py-1.5 rounded-full bg-bg-light text-primary text-xs font-semibold hover:bg-primary hover:text-white transition-all border border-transparent">
                  {item}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-primary mb-4">Tại sao nên chọn Danang Travel?</h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            Chúng tôi cam kết mang lại sự an tâm tuyệt đối và trải nghiệm thoải mái nhất cho khách hàng trên mọi cung đường.
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { icon: Car, title: 'Đội Xe Đời Mới', desc: 'Sở hữu dàn xe từ 4-45 chỗ đời mới, được bảo dưỡng định kỳ khắt khe.' },
            { icon: ShieldCheck, title: 'Tài Xế Chuyên Nghiệp', desc: 'Đội ngũ lái xe giàu kinh nghiệm, lịch sự, thông thuộc địa hình du lịch.' },
            { icon: CreditCard, title: 'Giá Cả Minh Bạch', desc: 'Cam kết giá tốt nhất thị trường, không phụ phí ẩn, không tăng giá lễ tết.' },
            { icon: Clock, title: 'Đúng Giờ - Tận Tâm', desc: 'Đón khách đúng giờ hẹn, phục vụ tận tình, hỗ trợ mang vác hành lý.' },
            { icon: Headphones, title: 'Hỗ Trợ 24/7', desc: 'Tổng đài chăm sóc khách hàng hoạt động 24/7, xử lý nhanh chóng mọi yêu cầu.' },
            { icon: Smile, title: 'Trải Nghiệm Đáng Nhớ', desc: 'Mọi hành trình cùng Danang Travel đều được chăm chút kỹ lưỡng nhất.' }
          ].map((feature, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -5 }}
              className="p-8 rounded-2xl bg-bg-light hover:bg-white border border-gray-50 hover:border-secondary/20 hover:shadow-xl transition-all group"
            >
              <div className="size-14 rounded-xl bg-primary/5 flex items-center justify-center text-secondary mb-6 group-hover:bg-secondary group-hover:text-white transition-all">
                <feature.icon className="size-7" />
              </div>
              <h3 className="font-display font-bold text-xl text-primary mb-3">{feature.title}</h3>
              <p className="text-gray-500 leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Promo Banner */}
      <section className="bg-accent/10 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-center gap-6 text-center md:text-left">
          <Ticket className="size-10 text-accent hidden md:block" />
          <h3 className="font-display font-extrabold text-2xl text-primary">
            <span className="text-accent underline">Mua kèm vé tour</span> để nhận thêm ưu đãi đặc biệt lên đến 20%!
          </h3>
          <button className="bg-accent hover:bg-opacity-90 text-white px-8 py-3 rounded-xl font-display font-bold shadow-lg transition-transform hover:scale-105">
            Xem ưu đãi
          </button>
        </div>
      </section>

      {/* Car Fleet */}
      <section className="py-24 bg-bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="font-display font-bold text-3xl text-primary mb-2">Đội xe phục vụ</h2>
            <p className="text-gray-500 text-lg">Lựa chọn dòng xe phù hợp với nhu cầu di chuyển của bạn</p>
          </div>
          <div className="flex bg-white p-1 rounded-xl shadow-sm">
            {['Tất cả', '4 Chỗ', '7 Chỗ', '16 Chỗ'].map((filter, i) => (
              <button key={filter} className={`px-5 py-2 rounded-lg font-semibold text-sm transition-all ${i === 0 ? 'bg-primary text-white shadow-md' : 'text-gray-500 hover:text-primary'}`}>
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {CAR_DATA.map((car) => (
            <article key={car.id} className="bg-white rounded-2xl overflow-hidden shadow-md group hover:shadow-2xl transition-all">
              <div className="relative h-56 overflow-hidden">
                <img src={car.image} alt={car.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                {car.tag && (
                  <span className={`absolute top-4 right-4 px-3 py-1 rounded-lg text-white text-xs font-bold shadow-sm ${car.tag === 'VIP' ? 'bg-accent' : 'bg-secondary'}`}>
                    {car.tag}
                  </span>
                )}
              </div>
              <div className="p-6">
                <h3 className="font-display font-bold text-xl text-primary mb-2">{car.name}</h3>
                <p className="text-gray-500 text-sm mb-5 line-clamp-2">{car.description}</p>
                <div className="flex items-center gap-6 py-4 border-y border-gray-50 mb-5">
                  {car.features.map((feat, i) => (
                    <div key={i} className="flex items-center gap-1.5 text-gray-400">
                      <feat.icon className="size-4" />
                      <span className="text-sm font-semibold">{feat.text}</span>
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-gray-400 uppercase font-bold tracking-wider">Giá từ</span>
                    <p className="text-accent font-display font-extrabold text-xl">{car.price}</p>
                  </div>
                  <button className="bg-primary/5 hover:bg-primary text-primary hover:text-white px-4 py-2 rounded-lg font-bold text-sm transition-all">
                    Chọn xe
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Pricing Table */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <h2 className="font-display font-bold text-3xl text-primary mb-3">Bảng Giá Dịch Vụ Tour Xe</h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">Khám phá các tour phổ biến với mức giá tốt nhất, đi kèm nhiều ưu đãi hấp dẫn!</p>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden rounded-3xl shadow-2xl border border-gray-100">
          <div className="overflow-x-auto">
            <table className="w-full text-left whitespace-nowrap">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="px-8 py-5 font-display font-bold text-sm uppercase tracking-wider">Chuyến đi</th>
                  <th className="px-8 py-5 font-display font-bold text-sm uppercase tracking-wider">Loại xe</th>
                  <th className="px-8 py-5 font-display font-bold text-sm uppercase tracking-wider">Khách</th>
                  <th className="px-8 py-5 font-display font-bold text-sm uppercase tracking-wider">Thời gian</th>
                  <th className="px-8 py-5 font-display font-bold text-sm uppercase tracking-wider">Giá/Chuyến</th>
                  <th className="px-8 py-5 font-display font-bold text-sm uppercase tracking-wider">Ưu đãi kèm</th>
                  <th className="px-8 py-5"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {TOUR_PRICING.map((tour, idx) => (
                  <tr key={idx} className="hover:bg-bg-light transition-colors group">
                    <td className="px-8 py-6 font-bold text-primary">{tour.route}</td>
                    <td className="px-8 py-6 text-gray-500 font-medium">{tour.type}</td>
                    <td className="px-8 py-6 text-gray-500 font-medium">{tour.pax}</td>
                    <td className="px-8 py-6 text-gray-500 font-medium">{tour.time}</td>
                    <td className="px-8 py-6 text-accent font-display font-black text-lg">{tour.price}</td>
                    <td className="px-8 py-6">
                      <span className="inline-flex items-center gap-1.5 text-secondary font-bold text-sm px-3 py-1 rounded-full bg-secondary/5">
                        <Ticket className="size-3.5" /> {tour.promo}
                      </span>
                    </td>
                    <td className="px-8 py-6 text-right">
                      <button className="bg-primary/5 hover:bg-primary text-primary hover:text-white px-5 py-2 rounded-lg font-bold text-sm transition-all">
                        Đặt ngay
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-24 bg-bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="font-display font-bold text-4xl text-primary leading-tight">Đăng Ký Đặt Xe Nhanh Chóng</h2>
              <p className="text-gray-500 text-lg leading-relaxed">
                Chỉ mất 30 giây để gửi thông tin. Chúng tôi sẽ liên hệ tư vấn và xác nhận ngay lập tức qua Hotline hoặc Zalo.
              </p>
            </div>
            
            <div className="space-y-4">
              {[
                'Hỗ trợ đón khách tận nơi theo yêu cầu',
                'Tài xế đón sớm 15 phút so với giờ hẹn',
                'Hỗ trợ hủy chuyến miễn phí trước 2 giờ',
                'Thanh toán linh hoạt: Tiền mặt hoặc chuyển khoản'
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="size-6 rounded-full bg-secondary flex items-center justify-center text-white">
                    <CircleCheck className="size-4" />
                  </div>
                  <span className="font-semibold text-primary">{item}</span>
                </div>
              ))}
            </div>
            
            <div className="p-6 rounded-2xl bg-primary text-white flex items-center gap-6 shadow-xl">
              <div className="size-16 rounded-xl bg-white/10 flex items-center justify-center">
                <PhoneCall className="size-8 text-accent" />
              </div>
              <div>
                <p className="text-sm text-white/70 font-semibold uppercase tracking-widest mb-1">Hotline tư vấn 24/7</p>
                <p className="text-3xl font-display font-black">1900 123 456</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 md:p-10 rounded-3xl shadow-2xl border border-gray-100">
            <form className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-primary block">Họ và tên *</label>
                <input 
                  type="text" 
                  placeholder="Nguyễn Văn A" 
                  className="w-full p-4 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-primary block">Số điện thoại *</label>
                <input 
                  type="tel" 
                  placeholder="0901 234 567" 
                  className="w-full p-4 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-primary block">Email (Không bắt buộc)</label>
                <input 
                  type="email" 
                  placeholder="example@gmail.com" 
                  className="w-full p-4 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-primary block">Yêu cầu đặc biệt</label>
                <textarea 
                  rows={3}
                  placeholder="Ví dụ: Cần xe có ghế trẻ em, đón sớm..." 
                  className="w-full p-4 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all resize-none"
                ></textarea>
              </div>
              <button className="w-full py-4 bg-accent hover:bg-opacity-90 text-white font-display font-bold rounded-2xl shadow-lg flex items-center justify-center gap-3 transition-transform hover:scale-[1.02] active:scale-100">
                <Send className="size-5" /> Gửi Yêu Cầu Đặt Xe
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-20">
        <div className="max-w-7xl mx-auto relative rounded-[40px] overflow-hidden shadow-2xl">
          <div className="absolute inset-0">
            <img 
              src="https://images.unsplash.com/photo-1544984243-ea5badee1105?q=80&w=2000&auto=format&fit=crop" 
              alt="Hoi An Night"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-primary/90"></div>
          </div>
          <div className="relative z-10 p-12 md:p-20 flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="max-w-2xl text-center md:text-left">
              <h2 className="font-display font-bold text-3xl md:text-5xl text-white mb-6">Bạn chưa tìm được chuyến xe ưng ý?</h2>
              <p className="text-white/80 text-xl leading-relaxed">
                Hãy liên hệ ngay với chúng tôi để được thiết kế lộ trình riêng và báo giá tốt nhất cho chuyến đi của bạn.
              </p>
            </div>
            <button className="bg-accent hover:bg-white hover:text-accent text-white px-10 py-5 rounded-2xl font-display font-bold text-xl shadow-2xl transition-all whitespace-nowrap transform hover:-translate-y-1">
              Liên hệ ngay
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white pt-24 pb-12 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20 text-center md:text-left">
            <div className="space-y-6">
              <div className="flex items-center gap-3 justify-center md:justify-start">
                <div className="size-10 bg-white rounded-lg flex items-center justify-center text-primary">
                  <Car className="size-6" />
                </div>
                <div className="flex flex-col">
                  <span className="font-display font-black text-2xl leading-none">DANANG</span>
                  <span className="text-secondary font-display font-bold text-sm tracking-widest italic">TRAVEL</span>
                </div>
              </div>
              <p className="text-white/60 leading-relaxed">
                Đơn vị cung cấp dịch vụ vận chuyển du lịch uy tín hàng đầu tại Đà Nẵng và Hội An. Mang lại hành trình an toàn, thoải mái và giá cả cạnh tranh nhất.
              </p>
              <div className="flex items-center gap-4 justify-center md:justify-start">
                {[Facebook, Linkedin, Instagram].map((Icon, idx) => (
                  <a key={idx} href="#" className="size-10 rounded-xl bg-white/5 hover:bg-secondary hover:text-white flex items-center justify-center transition-all text-white/50">
                    <Icon className="size-5" />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-display font-bold text-xl mb-8 text-secondary">Về chúng tôi</h4>
              <ul className="space-y-4 text-white/60 font-medium">
                <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2 group"><ChevronRight className="size-4 group-hover:translate-x-1 transition-transform" /> Giới thiệu công ty</a></li>
                <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2 group"><ChevronRight className="size-4 group-hover:translate-x-1 transition-transform" /> Đội ngũ tài xế</a></li>
                <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2 group"><ChevronRight className="size-4 group-hover:translate-x-1 transition-transform" /> Bảng giá dịch vụ</a></li>
                <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2 group"><ChevronRight className="size-4 group-hover:translate-x-1 transition-transform" /> Tuyển dụng</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-display font-bold text-xl mb-8 text-secondary">Hỗ trợ khách hàng</h4>
              <ul className="space-y-4 text-white/60 font-medium">
                <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2 group"><ChevronRight className="size-4 group-hover:translate-x-1 transition-transform" /> Hướng dẫn đặt xe</a></li>
                <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2 group"><ChevronRight className="size-4 group-hover:translate-x-1 transition-transform" /> Chính sách bảo mật</a></li>
                <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2 group"><ChevronRight className="size-4 group-hover:translate-x-1 transition-transform" /> Câu hỏi thường gặp</a></li>
                <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2 group"><ChevronRight className="size-4 group-hover:translate-x-1 transition-transform" /> Điều khoản sử dụng</a></li>
              </ul>
            </div>

            <div className="space-y-6">
              <h4 className="font-display font-bold text-xl mb-2 text-secondary">Liên hệ</h4>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <MapPin className="size-5 text-secondary shrink-0 mt-1" />
                  <span className="text-white/60 text-sm">123 Đường Nguyễn Văn Linh, Đà Nẵng, Việt Nam</span>
                </div>
                <div className="flex gap-4">
                  <PhoneCall className="size-5 text-secondary shrink-0 mt-1" />
                  <span className="text-white/60 text-sm">1900 123 456</span>
                </div>
                <div className="flex gap-4">
                  <Mail className="size-5 text-secondary shrink-0 mt-1" />
                  <span className="text-white/60 text-sm">booking@danangtravel.com</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-white/30 text-sm">© 2024 Danang Travel Service. All rights reserved.</p>
            <div className="flex gap-8 text-xs font-bold uppercase tracking-wider text-white/20">
              <a href="#" className="hover:text-white transition-colors">Sitemap</a>
              <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
