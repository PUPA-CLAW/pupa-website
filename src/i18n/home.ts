// Homepage copy, EN and ID side by side so staff can review translations easily.
import type { Lang } from './ui';

export const home: Record<Lang, any> = {
  en: {
    metaTitle: 'PUPA Center — Life Skills & Work Readiness for Neurodivergent Young Adults | Tangerang',
    metaDescription:
      'PUPA Center helps neurodivergent young adults in Tangerang build life skills, work readiness, and community access through the Mandiri, Karya, and Access programs.',
    eyebrow: 'Alam Sutera, Tangerang · Indonesia',
    heroTitle: 'A Future Where Neurodivergent Young Adults Live a Life That Matters.',
    heroLede:
      'PUPA Center is a learning center where autistic and other neurodivergent young adults build daily living skills, work skills, and real connections to jobs and community.',
    ctaVisit: 'Book a visit on WhatsApp',
    ctaPrograms: 'Explore our programs',
    doorwaysTitle: 'How Can We Help You Today?',
    doorwaysLede: 'Choose the path that fits you. Each one takes you straight to the information you need.',
    doorways: [
      { title: 'For Families', body: 'Learn how our programs work, what a typical day looks like, and how to enroll your young adult. Start with a free visit to our center.', link: 'See how enrollment works', routeKey: 'enrollment' },
      { title: 'For Donors & Partners', body: 'Your support funds scholarships, training materials, and job placements. See where donations go and how companies can partner with us.', link: 'See ways to give', routeKey: 'donate' },
      { title: 'For Volunteers', body: 'Share your skills as a class mentor, workshop leader, or event helper. We will match your time and experience to a role that fits.', link: 'See volunteer roles', routeKey: 'getInvolved' },
    ],
    programsTitle: 'One Journey, Three Stages',
    programsLede:
      'Our programs are a sequence. Learners build independence first, then work skills, then step into jobs and community life. Each learner moves at their own pace.',
    stages: [
      { tag: 'Stage 1 · Life skills', name: 'Mandiri', body: 'Daily living skills: self-care, cooking, money handling, using transport, and communication for everyday situations.', link: 'Learn about Mandiri', anchor: '#mandiri' },
      { tag: 'Stage 2 · Work readiness', name: 'Karya', body: 'Vocational training and workplace habits: following instructions, working in a team, and practicing real production tasks.', link: 'Learn about Karya', anchor: '#karya' },
      { tag: 'Stage 3 · Employment', name: 'Access', body: 'Supported internships, job placement with partner companies, and ongoing coaching in the workplace and community.', link: 'Learn about Access', anchor: '#access' },
    ],
    pathNotePrefix: 'Alongside the main journey, ',
    pathNoteLink: 'extracurricular classes',
    pathNoteSuffix: ' — art, music, sport, and social clubs — help learners explore interests and build friendships.',
    impactTitle: 'PUPA at a Glance',
    impactLede: 'A structured pathway for neurodivergent young adults in Tangerang.',
    stats: [
      { num: '16–25', label: 'The age range of young adults we support' },
      { num: '3', label: 'Core programs — Mandiri, Karya, and Access — forming one journey' },
      { num: '5 days', label: 'Of structured activities every week, Monday to Friday' },
    ],
    storyTitle: 'Growth Journeys',
    storyQuote: '“Kyle was invited to continue with the company as a contract worker — and after graduating from PUPA Center, he remains employed there today.”',
    storyAttribution: '— From Kyle\u2019s growth journey',
    storyCta: 'Read more growth journeys',
    bannerQuote: 'Recognized for their potential, not defined by limitations.',
    donateTitle: 'Help a Young Adult Reach Independence',
    donateLede:
      'Donations fund program scholarships, training materials, and job coaching. Every contribution goes directly to learner support, and we publish how funds are used.',
    donateCta: 'Donate now',
    waysTitle: 'Ways to Give',
    ways: [
      { strong: 'Corporate partnership', rest: ' — email us to discuss CSR programs' },
    ],
  },
  id: {
    metaTitle: 'PUPA Center — Kecakapan Hidup & Kesiapan Kerja untuk Anak Muda Neurodivergen | Tangerang',
    metaDescription:
      'PUPA Center membantu anak muda neurodivergen di Tangerang membangun kecakapan hidup, kesiapan kerja, dan akses ke komunitas melalui program Mandiri, Karya, dan Access.',
    eyebrow: 'Alam Sutera, Tangerang · Indonesia',
    heroTitle: 'Mewujudkan masa depan individu neurodivergen menjalani hidup yang bermakna.',
    heroLede:
      'Program PUPA Center dirancang untuk pengembangan diri individu neurodivergen dewasa — mendampingi transisi dari sekolah atau pendidikan formal menuju penguatan keterampilan hidup (Life Skill) dan kesiapan kerja (Work Readiness), sebagai langkah menjalani kehidupan yang lebih mandiri baik dalam keseharian maupun di dunia kerja.',
    ctaVisit: 'Jadwalkan kunjungan via WhatsApp',
    ctaPrograms: 'Lihat program kami',
    doorwaysTitle: 'Apa yang bisa kami bantu hari ini?',
    doorwaysLede: 'Pilih jalur yang sesuai untuk Anda. Setiap jalur langsung menuju informasi yang Anda butuhkan.',
    doorways: [
      { title: 'Untuk keluarga', body: 'Pelajari cara kerja program kami, seperti apa kegiatan sehari-hari, dan cara mendaftarkan anak Anda. Mulai dengan kunjungan gratis ke pusat kami.', link: 'Lihat cara pendaftaran', routeKey: 'enrollment' },
      { title: 'Untuk donatur & mitra', body: 'Dukungan Anda mendanai beasiswa, materi pelatihan, dan penempatan kerja. Lihat ke mana donasi digunakan dan bagaimana perusahaan dapat bermitra dengan kami.', link: 'Lihat cara berdonasi', routeKey: 'donate' },
      { title: 'Untuk relawan', body: 'Bagikan keahlian Anda sebagai mentor kelas, pemandu lokakarya, atau pendamping acara. Kami akan mencocokkan waktu dan pengalaman Anda dengan peran yang sesuai.', link: 'Lihat peran relawan', routeKey: 'getInvolved' },
    ],
    programsTitle: 'Satu perjalanan, tiga tahap',
    programsLede:
      'Program kami adalah sebuah urutan. Peserta membangun kemandirian terlebih dahulu, lalu keterampilan kerja, kemudian melangkah ke dunia kerja dan kehidupan komunitas. Setiap peserta bergerak sesuai kecepatannya sendiri.',
    stages: [
      { tag: 'Tahap 1 · Kecakapan hidup', name: 'Mandiri', body: 'Keterampilan hidup sehari-hari: merawat diri, memasak, mengelola uang, menggunakan transportasi, dan berkomunikasi dalam situasi sehari-hari.', link: 'Pelajari Mandiri', anchor: '#mandiri' },
      { tag: 'Tahap 2 · Kesiapan kerja', name: 'Karya', body: 'Pelatihan vokasional dan kebiasaan kerja: mengikuti instruksi, bekerja dalam tim, dan berlatih tugas produksi yang nyata.', link: 'Pelajari Karya', anchor: '#karya' },
      { tag: 'Tahap 3 · Pekerjaan', name: 'Access', body: 'Magang dengan pendampingan, penempatan kerja di perusahaan mitra, dan pembinaan berkelanjutan di tempat kerja dan komunitas.', link: 'Pelajari Access', anchor: '#access' },
    ],
    pathNotePrefix: 'Di samping perjalanan utama, ',
    pathNoteLink: 'kelas ekstrakurikuler',
    pathNoteSuffix: ' — seni, musik, olahraga, dan klub sosial — membantu peserta menggali minat dan membangun persahabatan.',
    impactTitle: 'PUPA secara sekilas',
    impactLede: 'Jalur yang terstruktur bagi anak muda neurodivergen di Tangerang.',
    stats: [
      { num: '16–25', label: 'Rentang usia anak muda yang kami dampingi' },
      { num: '3', label: 'Program inti — Mandiri, Karya, dan Access — dalam satu perjalanan' },
      { num: '5 hari', label: 'Kegiatan terstruktur setiap minggu, Senin sampai Jumat' },
    ],
    storyTitle: 'Kisah pertumbuhan',
    storyQuote: '“Kyle mendapat kesempatan sebagai intern Human Resources di perusahaan mitra — dan setelah lulus dari PUPA Center, ia tetap bekerja di sana hingga hari ini.”',
    storyAttribution: '— Dari kisah pertumbuhan Kyle',
    storyCta: 'Baca kisah pertumbuhan lainnya',
    bannerQuote: 'Dikenali karena potensinya, bukan didefinisikan oleh keterbatasannya.',
    donateTitle: 'Bantu anak muda mencapai kemandirian',
    donateLede:
      'Donasi mendanai beasiswa program, materi pelatihan, dan pendampingan kerja. Setiap kontribusi langsung digunakan untuk mendukung peserta, dan kami mempublikasikan penggunaan dana.',
    donateCta: 'Donasi sekarang',
    waysTitle: 'Cara berdonasi',
    ways: [
      { strong: 'Transfer bank', rest: ' — detail rekening dicantumkan di sini (contoh)' },
      { strong: 'QRIS', rest: ' — kode pindai untuk berdonasi ditampilkan di sini (contoh)' },
      { strong: 'Kemitraan perusahaan', rest: ' — hubungi kami melalui email untuk membahas program CSR' },
    ],
  },
};
