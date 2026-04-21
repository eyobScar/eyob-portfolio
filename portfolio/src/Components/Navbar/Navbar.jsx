import React, { useEffect, useRef, useState } from "react";
import { navLinks } from "../../Data/navLinks";
import { Layers, Menu, X } from "lucide-react";
import { personalInfo } from "../../Data/aboutMe";

const Navbar = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const useScrollSpy = (sectionIds, offset = 100) => {
    const [activeSection, setActiveSection] = useState("");
    useEffect(() => {
      const handleScroll = () => {
        const scrollPosition = window.scrollY + offset;
        for (let ind = sectionIds.length - 1; ind >= 0; ind--) {
          const section = document.getElementById(sectionIds[ind]);
          if (section) {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            if (
              scrollPosition >= sectionTop &&
              scrollPosition < sectionTop + sectionHeight
            ) {
              setActiveSection(sectionIds[ind]);
              return;
            }
          }
        }
      };
      window.addEventListener("scroll", handleScroll, { passive: true });
      handleScroll();
      return () => window.removeEventListener(scroll, handleScroll);
    }, [sectionIds, offset]);
    return activeSection;
  };
  const activeSection = useScrollSpy(navLinks.map((item) => item.id));

  const scrollToSection = (sectionId, offset = 80) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const top = section.offsetTop - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  const scrollReveal = (options = {}) => {
    const [isVisible, setIsVisible] = useState(false);

    const { threshold = 0.1, rootMargin = "0px" } = options;
    const ref = useRef(null);

    useEffect(() => {
      const element = ref.current;
      if (!element) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(element);
          }
        },
        {
          threshold,
          rootMargin,
        },
      );
      observer.observe(element);
      return () => {
        if (element) {
          observer.unobserve(element);
        }
      };
    }, [threshold, rootMargin]);
    return { ref, isVisible };
  };

  const handleNavClick = (sectionId) => {
    scrollToSection(sectionId);
    // setIsOpenMenu(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div>
      <nav
        className={`fixed left-0 top-0 right-0 w-full z-1000 py-4 transition-all duration-300 ${isScrolled ? "bg-black/30 backdrop-blur-lg" : "bg-transparent"}`}
        style={{ transform: "translate3d(0,0,0)" }}
      >
        <div className="max-w[1300px] mx-auto px-5">
          <div className="flex items-center justify-between">
            <div className="flex gap-2 items-center text-pink-600" style={{}}>
              <Layers />
              <button
                className="text-2x1 font-bold back bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                {personalInfo.name.split(" ")[0]}
              </button>
            </div>
            <ul className="hidden md:flex gap-3">
              {navLinks.map((link) => (
                <li key={link._id} className="group">
                  <button
                    onClick={() => handleNavClick(link.id)}
                    className={`bg-linear-to-r from-primary to-secondary bg-clip-text relative text-base font-medium group-hover:text-pink-800 ${activeSection === link.id ? " text-transparent" : "text-white"}`}
                  >
                    {link.name}
                    <span
                      className={`absolute top-0 left-0 z-[-1] w-full h-full border-b-4 border-b-pink-600 rounded-lg opacity-0  transition-all duration-300
                    transform   ${activeSection === link.id ? "opacity-100 scale-100 translate-y-1" : "scale-0 translate-y-5"} `}
                    ></span>
                  </button>
                </li>
              ))}
            </ul>
            <div className="hidden md:flex items-center">
              <button
                className="border border-pink-600 px-10 py-1 rounded-full text-base"
                onClick={() => scrollToSection("contact-me")}
              >
                Get Me
              </button>
            </div>
            <div className="group">
              <button
                onClick={() => setIsOpenMenu(!isOpenMenu)}
                className="transition-all duration-1000 md:hidden opacity-80 group-hover:opacity-100"
                // aria-label="menu"
                // aria-expanded={isOpenMenu}
              >
                {isOpenMenu ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>
      <p id="home" className="mt-20">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus adipisci
        expedita ex doloribus maiores, laborum exercitationem eaque natus sunt
        totam saepe quasi optio excepturi et est nesciunt minima incidunt
        deleniti? Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Corporis modi voluptatibus deserunt repudiandae vero ratione est nostrum
        esse ab quam corrupti omnis velit placeat pariatur natus, iure labore
        totam laborum, nihil tempore ad nesciunt at dolore. Pariatur repellendus
        inventore delectus nihil ea modi iusto dolor. Dolorem iusto
        reprehenderit eius nesciunt maiores laborum repellendus perspiciatis
        nulla fugit est, mollitia quaerat porro vero dignissimos ullam facere
        iure quas culpa. Eum omnis ex saepe odit impedit id modi sequi dolorem
        doloremque nisi, tempora eius culpa quisquam sed facere, porro quae quo
        beatae debitis hic exercitationem, cumque dolore aspernatur aut? Ipsum
        exercitationem voluptate unde!
      </p>
      <p id="about">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita, enim
        pariatur itaque tenetur voluptas minus similique facere facilis in
        aspernatur commodi consequatur dolorum corrupti corporis vitae inventore
        saepe dicta iste? Lorem, ipsum dolor sit amet consectetur adipisicing
        elit. Cupiditate nesciunt velit sunt repellendus illo possimus ea vero,
        maxime, dicta a quos atque eius corporis voluptatem dolor sed maiores
        tenetur, aperiam quas accusamus? Saepe reiciendis consequatur iure quas
        qui sapiente autem rem, corrupti error, quia ex enim vel at optio
        dolorem accusamus. Dolores sunt praesentium quisquam in aut sint debitis
        ratione nostrum, voluptas mollitia labore laudantium nesciunt inventore
        voluptatum minus rerum ut dolor? Veritatis laboriosam porro omnis
        blanditiis magnam vero, facilis adipisci, sequi rem dicta libero fugit,
        perferendis illum unde ut. Soluta, architecto eum. Hic deserunt
        veritatis nihil asperiores aspernatur dolorum quasi, fuga blanditiis
        consequuntur animi voluptatum maxime, obcaecati labore alias natus
        repellendus, autem magnam at tenetur molestiae. A reprehenderit numquam
        quia atque enim non nam nisi veritatis sit. Alias excepturi reiciendis
        reprehenderit cumque, earum vitae iste fuga voluptatum exercitationem,
        ab facere commodi! Maiores, atque? Impedit, ducimus consequatur eum
        vitae atque fuga reiciendis deleniti? Ad, iste et eos ut tenetur
        commodi! Quae quisquam eligendi recusandae, pariatur unde, fugiat
        sapiente eum quo numquam nemo iste nobis expedita quia commodi.
        Consequuntur doloribus illo enim autem nam magnam error hic, quam eos et
        nostrum quibusdam ea mollitia nobis aspernatur adipisci culpa asperiores
        minima? Voluptatum commodi ad incidunt mollitia. Quaerat, reprehenderit
        provident maxime voluptas rem sed voluptates modi animi consequuntur
        doloribus dolorem atque. Officiis, consequatur laudantium inventore
        animi obcaecati labore nam, debitis culpa vero, temporibus architecto
        delectus laborum blanditiis veniam harum illum? Inventore quos
        repudiandae quae tenetur recusandae, laudantium dolorem amet totam,
        voluptate aperiam placeat maxime. Reiciendis numquam sint maxime quidem
        laboriosam ex necessitatibus tempora repellat animi iusto sit dolores,
        cum culpa corporis quos sequi eius quod, perferendis dignissimos nobis
        fuga? Modi, accusamus laboriosam dolor veritatis maiores, voluptas
        cumque quam illum id excepturi, ullam ad necessitatibus provident!
        Tenetur quia ad, accusantium eveniet magni inventore dicta.
      </p>
      <p id="tech-stack">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt suscipit
        sit dolorum, voluptates consectetur, nisi dolor, dolore non quae ab
        repudiandae? Quis unde quasi quas accusantium vero optio ipsam quaerat.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque magni
        delectus sequi ea in, soluta molestias voluptatibus facilis assumenda
        nisi laboriosam nam distinctio rerum tempore vero similique omnis
        nostrum ullam. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Ad sunt repellat vero quisquam ullam doloremque blanditiis nulla ratione
        accusantium mollitia itaque et velit nemo officia officiis quo adipisci
        saepe voluptatum ducimus, fugit sed perferendis maxime dignissimos.
        Necessitatibus, omnis! Magnam tempora repellat id quia! Ratione ad
        excepturi voluptas sit, magni saepe cum illo voluptatibus illum
        consequatur in iure! Sint error nobis officia libero nemo amet dolorum
        quasi laborum distinctio laudantium, ipsum ad eveniet qui a eos animi
        odit modi sit vero ea dolores. Ea rerum ex ad quam libero ut, nihil,
        tempore in officiis rem aperiam natus pariatur atque eos aliquam
        perferendis necessitatibus sed tempora, exercitationem fugit. Sint
        tempore, officia atque quasi nisi dignissimos perspiciatis dolor
        cupiditate alias quos quidem possimus non ratione asperiores. Doloribus
        vitae facilis officia, temporibus, porro sapiente dicta quasi architecto
        sed distinctio expedita? Illum cupiditate officiis nemo repellat,
        adipisci molestiae voluptas distinctio ex id rem non culpa velit eveniet
        corrupti laboriosam debitis aut esse soluta reiciendis voluptatem vero.
        Facilis inventore, harum, error accusantium quam quis unde tenetur illo
        blanditiis minus reprehenderit voluptates. Eligendi neque, consectetur
        ut a dignissimos in assumenda quam saepe rerum nam fuga repudiandae
        blanditiis soluta porro fugiat dolorum odit nesciunt expedita quisquam
        dolor vel. Sunt odit omnis saepe. Iure, nulla. Facere atque
        exercitationem modi, in eaque repudiandae excepturi eum earum, cumque,
        tempora quae? Culpa animi ducimus eum atque sed assumenda, deserunt
        quasi eaque explicabo fugit aliquam laboriosam necessitatibus commodi
        hic et? Quas, impedit doloremque dolor ad eos unde sit perferendis
        accusantium reprehenderit corrupti nesciunt officia quae laboriosam
        aperiam blanditiis accusamus dicta soluta ea fugit laborum deleniti ex
        eius. Cumque dicta recusandae assumenda repellat soluta qui est, animi
        perferendis neque asperiores consectetur fugit amet sapiente vitae earum
        adipisci voluptas explicabo impedit consequatur pariatur! Saepe
        blanditiis minima doloremque nam, laboriosam ratione eligendi ut
        voluptatem nulla ea.
      </p>
      <p id="projects">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
        unde dolorum id. Libero, ducimus maxime iste corrupti natus in corporis
        voluptatibus facilis. Sunt doloremque recusandae saepe corrupti sint ea,
        in porro adipisci est magnam ut voluptate sed aspernatur quas laudantium
        consectetur, fugiat quibusdam voluptatibus veniam harum minima!
        Doloribus fugiat sequi cumque nemo quasi, iusto excepturi odit error
        iste provident, quo accusantium omnis tempore ducimus facere ipsa, magni
        atque accusamus nobis? Corporis, natus veniam nesciunt assumenda facere
        adipisci, eaque quis pariatur provident dignissimos reprehenderit, ut
        nostrum molestias explicabo. Optio obcaecati sed soluta, molestias atque
        quidem necessitatibus velit rerum ducimus officia alias consectetur,
        delectus voluptate eos vero maiores tempore quis eaque dolorem.
        Dignissimos illo quae eveniet incidunt omnis, aspernatur nemo labore
        voluptatibus expedita! Ipsam nostrum maiores sapiente totam, iste vel
        consectetur mollitia cupiditate, qui saepe molestiae animi, error nobis
        tenetur quod nemo. Blanditiis tenetur doloremque adipisci sed amet
        quisquam dolor accusantium harum enim asperiores. Maxime, eaque. Dolor,
        quibusdam ipsa! Voluptatum, placeat vitae neque natus consectetur unde
        est velit praesentium maxime corporis temporibus cum. Accusantium, ipsum
        aut eum autem saepe illum? Dicta unde illum quo pariatur sequi voluptas,
        iure repudiandae temporibus veritatis reiciendis accusamus, similique
        quam vel earum sit ab suscipit ea enim quas? Blanditiis commodi
        voluptatum cum? Laudantium, velit officia facere quasi iste libero
        reiciendis sit. Quisquam iure dolorem animi tempore perspiciatis
        asperiores omnis magnam culpa! Pariatur expedita iure, exercitationem, a
        id deserunt incidunt odit dolores hic, nihil aliquam facere molestias
        odio quos dolorum voluptatem error atque consequuntur. Laudantium
        debitis illo quos odit rerum! Ducimus, tempora aut quasi fuga
        repellendus, facere recusandae quidem quam corporis autem minus omnis
        sunt necessitatibus hic earum. Doloremque enim ab saepe nihil aspernatur
        quas. Ad veritatis laborum ut corporis, placeat similique magni, dicta,
        odio ab tempora adipisci numquam. Dignissimos praesentium illo fuga
        cumque iure provident voluptate repellat.
      </p>
      <p id="contact-me">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius
        dignissimos natus sed dolores. Fuga voluptatibus similique cumque,
        corporis itaque nisi alias voluptatem voluptas enim eligendi quos quasi
        molestiae delectus dignissimos voluptatum consequatur sapiente iste
        maiores dolore numquam iure magni at facilis! Iusto blanditiis, quidem
        reprehenderit molestias debitis amet aliquid. Eius vitae inventore amet
        ex incidunt qui in quisquam optio. Alias beatae nobis ratione dolore
        harum illum? Officia tenetur repudiandae animi suscipit cupiditate magni
        debitis aspernatur earum, ipsam, modi sit saepe deleniti, aut non. Quasi
        praesentium sunt nostrum nam sint laudantium, dolor saepe cupiditate vel
        soluta assumenda. Repellat autem distinctio quam nostrum qui porro?
        Itaque vero, aliquam possimus officiis quod dolor ut non. Impedit sed
        accusamus pariatur, tempore exercitationem dolore est aut culpa eos,
        quae eum voluptatum reprehenderit soluta eius quam accusantium
        laboriosam doloremque debitis fugiat! Laudantium, possimus delectus
        incidunt eius repellendus, perspiciatis a odio molestias alias
        architecto similique ex enim voluptas aspernatur culpa? Labore ipsam
        iste quidem repellat cumque officiis perferendis libero impedit quae
        eius praesentium, dolorum voluptates commodi, asperiores esse illo rerum
        fugit. Obcaecati nam ipsum enim id similique nesciunt repellat facere
        magnam quos omnis minima aliquid quam eaque, adipisci quidem maxime
        blanditiis! Eveniet modi error, voluptatum assumenda earum, vitae odit
        sit aperiam et fugiat ut recusandae blanditiis quam. Ad recusandae vero
        cum consequuntur neque voluptate tempore ipsam a aliquam dicta commodi
        quo nostrum, perspiciatis, eligendi architecto hic eveniet? Vel et, sint
        repellat ea ipsum modi quidem consequatur voluptatem! Quod magnam
        obcaecati ratione iste sunt numquam, reprehenderit, atque assumenda
        perferendis necessitatibus tempore temporibus fugit illum eligendi
        placeat ab veniam voluptates. Sequi distinctio blanditiis quidem
        deleniti quam fugiat dolore velit a ipsum, ducimus ex quibusdam pariatur
        atque quis placeat voluptatibus? Labore, eligendi asperiores. Dolor
        harum delectus deleniti incidunt dolores, illum cum similique
        consequatur ab temporibus, atque ducimus exercitationem, blanditiis
        officia!
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi, minima
        ipsa iusto dolorem beatae est placeat ullam voluptate quidem corporis
        praesentium ab. Rerum facere delectus porro asperiores, ea aliquid ab
        eius veritatis laborum optio, repellat autem voluptatibus! Inventore
        sapiente adipisci quibusdam, soluta dolorum ipsa minima nam ad repellat
        dicta omnis, deserunt saepe accusamus eum neque odit! Unde quia magnam
        dolorem asperiores ea mollitia? Ea, eveniet ut quis excepturi numquam
        laudantium sunt eum eaque voluptatem quae eligendi nulla doloremque
        explicabo? Dignissimos veritatis obcaecati repudiandae doloremque
        voluptas tempora ad, inventore consectetur rem impedit nobis, quae
        deleniti voluptatibus rerum facere expedita numquam. Accusantium, odio
        deleniti commodi iure repellendus cupiditate placeat excepturi ut ab
        aperiam pariatur, et officiis ullam expedita laborum dolores harum quis?
        Earum dicta ex sequi eos labore temporibus repellat obcaecati quasi,
        quis expedita beatae quam ad vel nam ipsum rem minus impedit hic.
        Deleniti, ea ipsa aperiam ab exercitationem quod distinctio eligendi
        nihil harum voluptatibus, a quidem rem fuga tenetur sequi expedita
        officiis doloribus mollitia delectus unde possimus tempora!
        Necessitatibus alias quos reprehenderit. Tempora quibusdam maiores,
        illum nulla voluptas corporis perspiciatis dolor nisi fuga aspernatur
        debitis sed repellendus quod recusandae commodi laborum qui neque quam
        provident reiciendis iure accusantium deleniti ipsa. Harum, assumenda
        quam quos ut architecto deleniti cumque eligendi vitae minima veritatis
        illo velit consequuntur, totam fugit ullam tempora commodi maiores,
        voluptate iure cum nisi? Ab ea, dolorum tempore aspernatur alias minus
        laborum quasi id earum sunt debitis, necessitatibus, ullam architecto
        animi sit hic delectus. Ducimus soluta laborum, labore dolore
        repudiandae nostrum id fugit cum dolores accusantium animi dignissimos
        fugiat molestiae, fuga officiis voluptates voluptas excepturi quasi. Cum
        suscipit nam optio ex quae, vero quam ullam impedit harum ratione
        accusamus odit fugiat nihil architecto facere dolor quis hic temporibus
        culpa. Neque suscipit aperiam possimus at reiciendis architecto, quidem
        provident quisquam! Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Vel, necessitatibus. Veniam veritatis ullam eos blanditiis sint
        maxime tempora! Necessitatibus optio rem vero asperiores incidunt illum
        facere dolores distinctio, quod quam rerum officia saepe atque pariatur
        labore! Saepe nesciunt perferendis eligendi nemo. Dolorem rem explicabo
        adipisci obcaecati. Inventore minima cum, laudantium perferendis facilis
        voluptates blanditiis ipsam consequuntur ut dolore magni commodi,
        cupiditate, molestias similique optio officia mollitia consectetur
        asperiores. Ipsum praesentium neque, obcaecati cumque nam dicta minus at
        excepturi explicabo consequatur? Facilis tempore possimus nostrum.
        Perferendis possimus nemo praesentium ea, id deserunt. Placeat ea id
        repudiandae eum dignissimos, aut et. Temporibus at libero accusamus
        rerum dolore esse minima officia rem, obcaecati perspiciatis quia
        dolorem suscipit facere corporis omnis fugit cum ipsum earum maxime
        dolores incidunt nam iure vero quae. Vitae nostrum distinctio quia at,
        ea itaque dolorem, eaque obcaecati, sequi officiis aliquid! Fuga harum
        sed expedita quisquam sit aut sapiente itaque laborum voluptatum quam
        maiores ipsam, qui tempora nobis repellendus quidem libero magnam, id
        nemo deleniti iste dolore iusto cupiditate consequatur. Sed, voluptas! A
        saepe recusandae, veritatis libero impedit facere quibusdam repellat
        eius quaerat sed quo perferendis doloremque! Nihil, natus possimus hic
        necessitatibus quo assumenda ipsa sunt doloremque a aliquam tenetur
        eaque nulla mollitia cupiditate nam consequatur? Dolores totam dicta
        minus eum necessitatibus nostrum tenetur. Ducimus optio laborum saepe
        adipisci rerum pariatur corporis ea, accusamus harum eveniet esse
        placeat eius, fugiat quae. Impedit consequatur, animi reprehenderit
        dolor consequuntur at dolorum eos, delectus voluptates deserunt quasi
        nemo autem maiores. Laboriosam numquam voluptatem dicta veniam molestiae
        asperiores sunt distinctio, nemo pariatur quaerat id libero atque
        corrupti minus voluptas at quo nam consequatur consequuntur
        exercitationem amet aperiam autem repellendus! Quasi assumenda commodi
        dolorum quaerat consequatur, tenetur corporis quos voluptas quas vitae
        animi culpa adipisci nam reprehenderit? Modi, quo reiciendis maxime
        nostrum adipisci nisi aliquid! Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Eaque alias dolores recusandae eius veniam animi?
        Laudantium, quasi non? Sequi earum magni natus adipisci at unde incidunt
        labore aut, accusantium rerum ipsum est magnam ratione. Cum id eaque ad
        blanditiis neque? Voluptatibus ex qui corporis ducimus, eveniet expedita
        commodi! Neque sit praesentium autem rem minima incidunt amet deserunt
        reiciendis possimus et id recusandae quibusdam, nemo quasi! Aliquam
        praesentium eligendi optio dicta doloribus facere illum sit, minima
        fuga! Laborum consequuntur sint tempore minus quidem eum. Possimus
        libero maxime recusandae quaerat quam nemo incidunt tempore quos
        similique id! Ipsa totam nesciunt numquam saepe aliquid unde suscipit
        inventore ex consectetur. Tenetur, labore nemo iusto culpa, praesentium
        vel laboriosam ex illum sint iste pariatur facilis. Mollitia adipisci a
        consequuntur omnis illo iste ipsa hic. Beatae distinctio velit, rem
        corrupti, ducimus aliquid quam commodi nulla, odit delectus voluptate?
        Omnis porro officia, maxime aspernatur sint vitae numquam dolor quos
        odio, cumque debitis at, in voluptates. Quas dolorum quisquam magnam
        voluptatibus non, vel impedit cumque minima earum natus harum tempore
        doloremque asperiores, doloribus veniam ab, nobis nisi repellendus
        distinctio. Omnis voluptatibus ipsam quod deserunt cupiditate, nobis
        sequi harum quibusdam architecto. Ad mollitia recusandae, totam dolores,
        quo aliquam et, perferendis earum vitae magnam neque nemo omnis maiores.
        Distinctio aspernatur, a consectetur totam accusantium, ipsa perferendis
        voluptatum quidem eveniet natus sequi in. Labore deserunt distinctio aut
        inventore architecto quis quam quasi nobis corrupti amet debitis
        quibusdam molestiae commodi ducimus soluta a eligendi quo tempore cumque
        voluptas facere, voluptatum error veniam natus? Ea atque nostrum fugiat
        obcaecati adipisci assumenda alias, aliquam quidem at vel optio eaque?
        Totam ipsam non odio velit reprehenderit, aperiam facere neque esse
        eaque veniam ipsum dignissimos eveniet eligendi delectus sed placeat ex
        est quam in consequatur praesentium ipsa voluptas! Sunt quos ab ex sed
        voluptas rerum inventore?
      </p>
    </div>
  );
};

export default Navbar;
