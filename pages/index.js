import Head from 'next/head'
import Navbar from '../components/Navbar'



export default function Home() {
  const showParagraph = (id, id1, btn) => {
    if (typeof window !== "undefined") {
      document.getElementById(id1).classList.remove('paragraph-fade')
      document.getElementById(btn).style.display = 'none'
      document.getElementById(id).style.display = "block"

    }
  }
  return (
    <div >
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
<Navbar />
      <div className='bg-gray-100 min-h-screen main-section md:bg-[length:40%]'>
        <div className='container p-6 mx-auto ltr '>
          <div className='flex-col flex justify-between h-screen'>
            <div>
              <img className='w-36 mt-16 ' src='/Logo.svg'></img>
            </div>
            <div className='mb-12'>
              <h1 className='font-waheed text-[#9C893D] text-4xl mb-4 md:text-6xl'>އަހަރީ ރިޕޯޓް</h1>
              <h1 className='text-9xl font-butler md:text-[262px] text-[#3C6686] '>2021</h1>
              <button className="bg-[#3C6686] shadow-lg hover:shadow-xl transition ease-in active:translate-y-[3px] hover:translate-y-[-3px] font-butler text-white font-bold py-2 px-4 rounded-full">
                Read Full Report
              </button>

              <div className=' h-10 w-10'>

                <img src='/Down.svg' className='animate-bounce w-full mt-20'></img>
              </div>
            </div>

          </div>

        </div>

      </div>



      <div>
        <div className='container p-6 mx-auto'>
          <div className='max-w-xl mx-auto mt-20 mb-10'>
            <p className='text-lg'>
              މި ރިޕޯޓަކީ 2021 ވަނަ އަހަރު ޖުޑީޝަލް ސަރވިސް ކޮމިޝަން ހިނގައި ދިޔަގޮތުގެ މަށްޗަށް އެކުލަވާލެވިފައިވާ ކޮމިޝަނުގެ 2021 ވަނަ އަހަރުގެ އަހަރީ ރިޕޯޓެވެ. މި ރިޕޯޓުގައި މައިގަނޑު ގޮތެއްގައި ބަލާލެވިފައި ވާނީ 2021 ވަނަ އަހަރު ކޮމިޝަނުން ކޮށްފައިވާ މުހިންމު މަސަކަތްތަކާއި، ލިބުނު ކުރިއެރުންތަކާއި، ކޮމިޝަނުގެ މަސައްކަތް ހިންގުމުގައި ކުރިމަތިވި ގޮންޖެހުންތަކާއި އަދި ކޮމިޝަނުގެ ކުރިމަގަށް ރޭވޭ ކަންތައްތަކުގެ މައްޗަށެވެ. އެގޮތުން މިރިޕޯޓް ބިނާކޮށްފައި ވާނީ ޤާނޫނުއަސާސީގެ 159 ވަނަ މާއްދާ އާއި ޤާނޫނު ނަންބަރު 2008/10 (ޖުޑީޝަލް ސަރވިސް ކޮމިޝަނުގެ ޤާނޫނު)  ގެ 21 ވަނަ މާއްދާގެ ދަށުން ޖުޑީޝަލް ސަރވިސް ކޮމިޝަނުގެ މަސްއޫލިއްޔަތުތަކާއި ޒިންމާތައް ކަމުގައި ކަނޑައަޅާފައިވާ ކަންތައްތަކާއި އަދި އެހެނިހެން ޤާނޫނުތަކުން ކޮމިޝަނުގެ މައްޗަށް ލާޒިމުކޮށްފައިވާ ކަންތައްތަކުގެ މައްޗަށެވެ.
            </p>
          </div>
        </div>

      </div>

      <div className='bg-black bg-opacity-90'>
        <div className='container p-6 mx-auto'>
          <div className='max-w-xl mx-auto mt-10 mb-10'>
            <h2 className=' text-2xl text-center text-white opacity-50 mb-10 '>ލަނޑުދަނޑި</h2>
            <p className='text-4xl leading-relaxed text-[#9C893D] text-center font-waheed'>
              އިންސާފު ކަށަވަރުކޮށްދޭ، އިތުބާރުހިފޭ ޖަވާބުދާރީވާ ވިސްނުން ފަހި، ފަނޑިޔާރުގެއެއް
            </p>
          </div>


        </div>

      </div>



      <div>
        <div className='container p-6 mx-auto'>
          <div className='max-w-2xl mx-auto mt-20 mb-10'>
            <h2 className=' text-2xl font-waheed text-3xl text-center text-[#9C893D]  mb-10 '>ކޮމިޝަނުގެ ރައީސްގެ ބަސް</h2>
            <p id='raeesgebas-1' className='leading-relaxed text-lg paragraph-fade'>
              ޖުޑީޝަލް ސަރވިސް ކޮމިޝަނަކީ ދިވެހިރާއްޖޭގެ ޖުމްހޫރިއްޔާގެ ޤާނޫނުއަސާސީންނާއި، ޖުޑީޝަލް ސަރވިސް ކޮމިޝަނުގެ ޤާނޫނުން ބާރުލިބިގެން އުފައްދާފައިވާ މިނިވަން މުސްތަޤިއްލު މުއައްސަސާއެކެވެ. މި ކޮމިޝަނުގެ 2021 ވަނަ އަހަރުގެ އަހަރީ ރިޕޯޓް ހުށަހަޅައި ދިނުމުގެ އުފާލިބުނު ކަމަށްޓަކައި ނިޢުމަތްތަކުގެ ވެރި ﷲ ޞުބުޙާނަހޫ ވަތަޢާލާއަށް ޙަމްދާ ޝުކުރު ދަންނަވަމެވެ.
              <br></br>
              ދިވެހިރާއްޖޭގެ ޖުމްހޫރިއްޔާގެ ޤާނޫނުއަސާސީންނާއި، ޖުޑީޝަލް ސަރވިސް ކޮމިޝަނުގެ ޤާނޫނުންނާއި، ދިވެހިރާއްޖޭގެ ފަނޑިޔާރުންގެ ޤާނޫނުންނާއި އަދި ދިވެހިރާއްޖޭގެ ކޯޓުތަކާބެހޭ ޤާނޫނުން މި ކޮމިޝަނަށް މަތިކޮށްފައިވާ ޒިންމާތަކާއި މަސްޢޫލިއްޔަތުތައް އެންމެ ފުރިހަމަގޮތުގައި އަދާކޮށް ދިވެހިރާއްޖޭގެ ޖުޑީޝަރީ ތަރައްޤީކޮށް އިޞްލާޙު ކުރުމަށް 2021 ވަނަ އަހަރު ގިނަގުނަ މަސައްކަތްތަކެއް ނިންމައި ތަންފީޒު ކުރެވުނެވެ. 2021 ވަނަ އަހަރަކީ މިކޮމިޝަނުގެ އަމާޒާ ލަނޑުދަނޑި ސާފުކޮށް ބަޔާންކުރެވި، އެމަންޒިލަށް ދަތުރު ފެށި އަހަރެވެ. ކޮމިޝަން އައު ލޯގޯއަކާއެކު ކުރަން މިއުޅޭ ދަތުރުގެ މަންޒިލް ހުދާއި ކަޅުން ބަޔާންކޮށް ދަތުރުފެށި އަހަރެވެ. އެގޮތުން، «އިންސާފު ކަށަވަރުކޮށްދޭ، އިތުބާރުހިފޭ ޖަވާބުދާރީވާ ވިސްނުން ފަހި، ފަނޑިޔާރުގެއެއް» ރައްޔިތުންނަށް ކަށަވަރުކޮށްދިނުމަށް މިކޮމިޝަނުން ދަތުރު ފެށިއެވެ.

            </p>
            <button id='raeesgebas-btn' onClick={(e) => showParagraph('raeesgebas', 'raeesgebas-1', 'raeesgebas-btn')} className='font-waheed text-[#9C893D]  text-xl text-center hover:opacity-80 opacity-100 underline rounded-full mt-[-4px]'>އިތުރަށް ކިޔުމަށް</button>
            <p id='raeesgebas' className='hidden'>
              ދުނިޔެއަށް ކުރިމަތިވި ކޮވިޑް-19 އާލަމީ ވަބާއަކީ، މިއަދު ކޮމިޝަނަށް ކުރިމަތިވެފައިވާ ގޮންޖެހުމެއް ނޫނެވެ. 2020 ވަނަ އަހަރު ކޮމިޝަނަށް ގެނެވުނު އުމްރާނީ ތަރައްޤީއާއި މަސައްކަތުގެ ވައްޓަފާޅިއާއި އާދަކާދައަށް ގެނެވުނު އެދެވޭ ހެޔޮ ބަދަލުތަކާއެކު، މިއަދު ކޮމިޝަނުން މަސައްކަތް ކުރަމުން މިދަނީ މިކޮމިޝަނުންގެ މަސައްކަތްތައް ހުއްޓުމެއްނެތް ގޮތަށް އައު އާންމު ހާލަތުގައެވެ.
              <br></br>

              2021 ވަނަ އަހަރު މިކޮމިޝަނުގެ 93 ބައްދަލުވުމެއް ބާއްވާ 658 ނިންމުމެއް ނިންމިއެވެ. އަދި 7 ދާއިމީ ކޮމިޓީގެ ގިނަ ބައްދަލުވުން ބާއްވާ 88 ތަޚްޤީޤު ކޮމިޓީ އެއްގެ މަސައްކަތް ކުރިއަށް ގެންދިޔައެވެ.
              <br></br>
              ކޯޓުތަކަށް ހުށަހެޅޭ މައްސަލައިގެ އަދަދަށާއި، އެ ދާއިރާއެއްގެ ކޯތުތަކުގެ މެދުގައި ހަމަޖެހިފައިވާ ދަތުރުފަތުރުގެ ނިޒާމަށް ރިއާޔަތްކުރުމަށްފަހު، ފަނޑިޔާރުންގެ ދަތިކަން ދިމާވާ ކޯޓުތަކަށް ފަނޑިޔާރުން ޢައްޔަނުކުރުމަށް 33 ފަނޑިޔާރުކު ހޯދުމަށް 10 ފަހަރު އިޢުލާން ކޮށް، އެ ބޭފުޅުންގެ ޤާބިލުކަމަށް ބަލައި، 4 ޤާޟީންނާއި 6 މެޖިސްޓްރޭޓުން 2021ގެ ނިޔަލަށް ޢައްޔަނު ކޮށްފައިވާނެއެވެ.
              <br></br>
              މީގެ އިރުތުން، ފަނޑިޔާރުން ޢައްޔަނުކުރުމުގެ ގަވާއިދަކީ މިހާރަށްވުރެ ހާމަކަން ބޮޑު، އިތުބާރު ލިބިފައިވާ މަސައްކަތަކަށް ހެދުމަށް ހަރުދަނާ އިޞްލާޙުތަކެއް ގެނެސްފައިވާނެއެވެ. އެގޮތުން، ފަނޑިޔާރުކަމަށް އެދި ހުށަހަޅާ އެންމެހައި ބޭފުޅުންގެ ނަންތައް އާންމުކުރުމާއި ކުށުގެ ރެކޯޑުތައް ސާފުކުރުމުގެ މަރުހަލާ ހަރުދަނާ ކޮށްފައި ވާނެއެވެ. އަދި 2021 އަހަރުގެ ތެރޭގައި ޔޫ.އެން.ޑީ.ޕީގެ ފަންނީ މާހިރެއްގެ އެހީގައި މިގަވާއިދު އިތުރަށް ތަރަށްޤީކޮށް ހަރުދަނާ ކުރުމުގެ މަސައްކަތް ކުރުމަށްފަހު، މިހާރު މިދަނީ މި ގަވާއިދުގެ އަޖުމަބެލުމުގެ މަސައްކަތް ކުރަމުންނެވެ.
              <br></br>
              2021 ވަނަ އަހަރު މިކޮމިޝަނަށް ލިބުނު އެންމެ ބޮޑު އެއް ކުރިއެރުމަކީ ފަނޑިޔާރުންގެ ފެންވަރު ބެލުމުގެ މަސައްކަތް ޢަމަލީ ގޮތުން ފެށުމެވެ. އެގޮތުން ފަނޑިޔާރުންގެ މަސައްކަތުގެ ފެންވަރު ބެލުމުގެ މަސައްކަތް ކުރުމަށް އިވޭލުއޭޓަރުންގެ ގޮތުގައި ސުޕްރީމް ކޯޓު އަދި ހައި ކޯޓުގެ ފަނޑިޔާރުން ހަމަޖައްސައި، މި މަސައްކަތުގައި ބައިވެރިވާ ހުރިހާ ފަރާތްތަކެއް ވާނީ ތަމްރީން ކޮށްފައެވެ. ޕައިލެޓް އިވޭލުއޭޝަންތައް މިފެށުނު އަހަރު ނިމޭނެކަމަކީ އަޅުގަނޑުމެންނަށް ލިބޭ އެންމެ ބޮޑު އެއް ކުރިއެރުމެވެ.  މި މަސައްކަތުގައި އިނގިރޭސިވިލާތުގެ ސަރުކާރުން ޔޫއެންޑީޕީ މެދުވެރިކޮށް ކެނޑިނޭޅި ދެއްވާ އެއްބާރުލުމަކީ ކޮމިޝަނުން ފާހަގަ ކުރާ ކަމެކެވެ.
              <br></br>
              2020 ވަނަ އަހަރު ފަނޑިޔާރުންގެ މާލީ ބަޔާން ހުށަހެޅުމުގެ ގަވާއިދު މުރާޖާކޮށް 2021 ވަނަ އަހަރު 199 ފަނޑިޔާރުން 461 މާލީ ބަޔާން ހުށަހަޅާފައިވާއިރު، މިގަވާއިދުގައި ބުނާ ފަދައިން ކޮމިޝަނުން މާލީ ބަޔާންތައް ދިރާސާކޮށް މާލީ ބަޔާންތަކުގައި އެއްވެސް އިންކޮންސިސްޓަންސީއެއް ފާހަގަވެފައި ނުވާކަމީ މިގަވާއިދުގެ މަޤްސަދު މާނަވީ ގޮތެއްގައި ތަންފީޒްވާކަމުގެ ދަލީލެކެވެ.
              <br></br>
              ދިވެހިރާއްޖޭގެ ޝަރުޢީ ނިޒާމާމެދު ރައްޔިތުންގެ މެދުގައި އުފެދޭ ސުވާލުތަކާއި ފަނޑިޔާރުންނާ ކޯޓުތަކާމެދު އުފެދޭ ކަންބޮޑުވުންތަކާ ގުޅިގެން ފާއިތުވެދިޔަ އަހަރު، މިކޮމިޝަނަށް 404 މައްސަލައެއް ހުށަހެޅި، މިކޮމިޝަނުގެ މައްސަލަ ބެލުމާމެދު ގޮތެއް ނިންމާ ކޮމިޓީން މި މައްސަލަތަކުގެ ތެރެއިން 90% މައްސަލައަށް ގޮތެއް ނިންމިއެވެ. ވޭތުވެ ދިޔަ 3 އަހަރު މިކޮމިޝަނަށް ހުށަހެޅޭ މައްސަލަތައް އޭގެ ކުރީ 10 އަހަރުގެ ޖުމްލައަށްވުރެ 28% އިންސައްތަ އިތުރަށް ހުށަހެޅިފައިވާކަމީ މި ކޮމިޝަނާމެދު އާންމުން ކުރާ އިތުބާރު ބޮޑުތަނުން ބޮޑުވެފައިވާކަން ދޭހަވާކަމެކެވެ.

              <br></br>
              2021 ވަނަ އަހަރުވެސް، ތަޚްޤީޤް ކޮމިޓީތަކުން 33 މައްސަލައެއް ނިންމާފައި ވެއެވެ. ކޮމިޝަނުގައި މިވަގުތު ނުނިމި ހުރި މައްސަލައިގެ އަދަދު 2020 ވަނަ އަހަރާ އަޅާބަލާއިރު 20 އިންސައްތަ ދަށަށް ގޮސްފައިވެއެވެ.
              <br></br>

              މުއައްސަސާއެއްގެ އެންމެ މުހިންމު އެއް ރައުސުލްމާލަކީ އިންސާނީ ވަޞީލަތެވެ. ކޮމިޝަނުގެ މަސައްކަތްތަކަށް ލިބިފައިވާ ކުރިއެރުންތަކަކީ، މުވައްޒަފުންގެ އަދަދަށް ބަދަލުތަކެއް ނުގެނެސް ގެނެވުނު ކުރިއެރުމެއްކަމީ ކޮމިޝަނުގެ މުވައްޒަފުން މަސައްކަތުގައި ދައްކާ ލާމަސީލު ނަމޫނާކަން އުފަލާއެކު ފާހަގަ ކުރަމެވެ. މުވައްޒަފުން ތަމްރީން ކުރުމަށްޓަކައި 36 ގަޑިއިރުގެ ތަމްރީން ޕްރޮގްރާމްތައް ނިމިދިއަ އަހަރު ރާވާ ހިންގާފައިވުމީ ޒަމާނީ ވެއްޓެއްގައި ޒަމާނީ ވަސީލަތްތަކަށް އަހުލުވެރިވެ ތިބެ މި ކޮމިޝަނުގެ މުވައްޒަފުން މަސައްކަތް ކުރުމަށް ހޯދައިދެވުނު ފުރުސަތެއްކަން އުފަލާއެކު ފާހަގަ ކުރަމެވެ.

              <br></br>

              ޖުޑީޝަލް ސަރވިސް ކޮމިޝަނުގެ ގިނަ މެންބަރުންނަކީ ކޮމިޝަނުގެ މެންބަރުކަމުގެ އިތުރުން ދިވެހި ދައުލަތުގެ މުހިންމު މަސްއޫލިއްޔަތުތައް އަދާކުރައްވާ ފަރާތްތަކަށް ވާއިރު އެބޭފުޅުންގެ މި ދެންނެވި މަސްއޫލިއްޔަތާއި ވާޖިބުތައް ފުރިހަމައަށް އަދާކުރައްވަމުން ކޮމިޝަނުގެ ބައްދަލުވުންތަކަށް ވަޑައިގަތުމަށް ބެހެއްޓެވި ފަރުވާތެރިކަން އަޅުގަނޑު އަބަދުވެސް ފާހަގަކުރަމެވެ. މީގެ އިތުރުން އެކިއެކި ކޮމިޓީތަކަށް ވަޑައިގެން އެ ކޮމިޓީތަކުގެ މަސައްކަތް ނިންމެވުމަށްޓަކައި ގިނަ ވަގުތުތަކެއް މެންބަރުން ހޭދަކުރައްވާފައިވާ ކަންވެސް އަޅުގަނޑު ފާހަގަ ކުރަމެވެ.
              <br></br>


              2021 ވަނަ އަހަރު ދޭދޭ ޤައުމުތަކާއި ބައިނަލް އަޤްވާމީ ޖަމިޢިއްޔާ ޖަމާޢަތްތަކުގެ އެހީގައި ގިނަ މަސައްކަތްތަކެއް ވަނީ ފެށިފައެވެ. އެގޮތުން ޔޫރަޕިއަން ޔުނިއަންއާއެކު ސަރކިޓް ކޯޓު މޮޑެލްގެ މަސައްކަތްތަކާ، ކޮމިޝަނުގެ ޤާނޫނުގައި ލާޒިމްކުރާ  ގަވާއިދުތައް މުރާޖާ ކުރުމުގެ މަސައްކަތް އަދި ފަނޑިޔާރުންގެ މަސައްކަތުގައި ހޭދަވާ ވަގުތު ހޯދުމަށް ދިރާސީ މަސައްކަތެއް ފަށާފައިވެއެވެ. ކޮމިޝަނުގެ މުއާސަލާތީ ކަންކަން ޒަމާނީ ގޮތަކަށް ބައްޓަން ކުރުމަށްޓަކައި ޔޫއެންޑީޕީގެ އެހީގައި ކޮމިޝަނުގެ ކޮމިއުނިކޭޝަން ފްރޭމްވާރކް އެކުލަވާލުމުގެ މަސައްކަތްވެސް ފަށާފައިވެއެވެ.
              <br></br>
              ޖުޑީޝަލް ސަރވިސް ކޮމިޝަނުގެ ވާޖިބުތައް އަދާކުރުމުގައި، އެކިގޮތްގޮތުން ކޮމިޝަނަށް އެހީތެރިވެދެއްވި ދައުލަތުގެ އެންމެހައި އިދާރާތަކަށާއި ޖުޑީޝަލް ސަރވިސް ކޮމިޝަނުގެ ޢިއްޒަތްތެރި މެންބަރުންނާއި ހީވާގި މުވައްޒަފުންނަށާއި، އެންމެހައި ދިވެހި ރައްޔިތުންނަށް ނިހާޔަތަށް ޝުކުރު ދަންނަވަމެވެ.

            </p>
          </div>
        </div>

      </div>

      <div className='bg-[#9C893D] bg-opacity-10'>
        <div className='container p-6 mx-auto'>
          <div className='max-w-6xl mx-auto mt-10 mb-10'>
            <h2 className=' text-4xl font-waheed text-center  text-[#9C893D]  mb-10 '>ކޮމިޝަނުގެ މެންބަރުން</h2>
          
          
            <div className='flex flex-wrap justify-between items-align-center'>


              <div className='w-64 text-center mx-auto mt-10'>
                <img src='/members/hisaan-hussain@3x.png' />
                <h3 className='font-waheed text-lg text-[#3C6686] mt-4'>ކޮމިޝަނުގެ ރައީސް</h3>
                <p className='text-xl mt-2'>އަލްއުސްތާޛާ ޙިސާން ޙުސައިން</p>
                <p className='text-sm opacity-80 mt-2'>ރައްޔިތުންގެ މަޖިލީހުގެ މެންބަރުންގެ ތެރެއިން އެ މަޖިލީހުން ކަނޑައަޅާ މެންބަރު
                </p>
              </div>



              <div className='w-64 text-center mx-auto mt-10'>
                <img src='/members/hisaan-hussain@3x.png' />
                <h3 className='font-waheed text-lg text-[#3C6686] mt-4'>ކޮމިޝަނުގެ ރައީސް</h3>
                <p className='text-xl mt-2'>އަލްއުސްތާޛާ ޙިސާން ޙުސައިން</p>
                <p className='text-sm opacity-80 mt-2'>ރައްޔިތުންގެ މަޖިލީހުގެ މެންބަރުންގެ ތެރެއިން އެ މަޖިލީހުން ކަނޑައަޅާ މެންބަރު
                </p>
              </div>


            </div>


            <div  className='flex flex-wrap justify-between items-align-center'>

            <div className='w-52 text-center mx-auto mt-10 p-4'>
                <img src='/members/hisaan-hussain@3x.png' />
                <h3 className='font-waheed text-lg text-[#3C6686] mt-4'>ކޮމިޝަނުގެ ރައީސް</h3>
                <p className='text-xl mt-2'>އަލްއުސްތާޛާ ޙިސާން ޙުސައިން</p>
                <p className='text-sm opacity-80 mt-2'>ރައްޔިތުންގެ މަޖިލީހުގެ މެންބަރުންގެ ތެރެއިން އެ މަޖިލީހުން ކަނޑައަޅާ މެންބަރު
                </p>
              </div>
             <div className='w-52 text-center mx-auto mt-10 p-4'>
                <img src='/members/hisaan-hussain@3x.png' />
                <h3 className='font-waheed text-lg text-[#3C6686] mt-4'>ކޮމިޝަނުގެ ރައީސް</h3>
                <p className='text-xl mt-2'>އަލްއުސްތާޛާ ޙިސާން ޙުސައިން</p>
                <p className='text-sm opacity-80 mt-2'>ރައްޔިތުންގެ މަޖިލީހުގެ މެންބަރުންގެ ތެރެއިން އެ މަޖިލީހުން ކަނޑައަޅާ މެންބަރު
                </p>
              </div>
              
              <div className='w-52 text-center mx-auto mt-10 p-4'>
                <img src='/members/hisaan-hussain@3x.png' />
                <h3 className='font-waheed text-lg text-[#3C6686] mt-4'>ކޮމިޝަނުގެ ރައީސް</h3>
                <p className='text-xl mt-2'>އަލްއުސްތާޛާ ޙިސާން ޙުސައިން</p>
                <p className='text-sm opacity-80 mt-2'>ރައްޔިތުންގެ މަޖިލީހުގެ މެންބަރުންގެ ތެރެއިން އެ މަޖިލީހުން ކަނޑައަޅާ މެންބަރު
                </p>
              </div>
              <div className='w-52 text-center mx-auto mt-10 p-4'>
                <img src='/members/hisaan-hussain@3x.png' />
                <h3 className='font-waheed text-lg text-[#3C6686] mt-4'>ކޮމިޝަނުގެ ރައީސް</h3>
                <p className='text-xl mt-2'>އަލްއުސްތާޛާ ޙިސާން ޙުސައިން</p>
                <p className='text-sm opacity-80 mt-2'>ރައްޔިތުންގެ މަޖިލީހުގެ މެންބަރުންގެ ތެރެއިން އެ މަޖިލީހުން ކަނޑައަޅާ މެންބަރު
                </p>
              </div>

            
            </div >


          </div>


        </div>

      </div>

    </div>
  )
}
