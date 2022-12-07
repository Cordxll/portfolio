import { TextToSpeech } from './TextToSpeech'
import headshot from '../../assets/IMG_1783.jpeg'
import {FaShare} from 'react-icons/fa'

export default function Two(){
    var d2 = new Date("2022/11/15")
    var d1= new Date()

    function Header(){
        return(
            <>
                <div className="flex text-black">
                    <img src={headshot} alt="" className="flex-shrink-0 w-12 h-12 border rounded-full" />
                    <div className="flex flex-col p-2">
                        <h4 className="text-sm font-semibold text-center md:text-left">Cordell Browne</h4>
                        <div className="text-xs">Nov 15, 2022 · 3 min read · {TextToSpeech("hello, my name is cordell browne")}</div>
                    </div>
                    <div className='ml-auto mt-2'>
                        <button className='p-2  border border-gray-300 rounded-full hover:bg-gray-100'><FaShare/></button>
                    </div>
                </div>
            </>
        )
    }

    return(
        <div className="flex justify-center items-center font-serif">
            <div class="max-w-3xl pt-6">
                    {Header()}
                    <h1 class="pt-4 text-4xl font-serif">BeautifulSoup, How to web scrape with python.</h1>
                    <p class="pb-4 text-sm">{Math.floor(Math.abs(d1-d2)/86400000)} days ago</p>
                    <p class="text-sm italic text-gray-500 px-40 py-4">You can't just sit there and wait for people to give you that golden dream. You've got to get out there and make it happen for yourself. - Diana Ross</p>
                    <h1 class="py-4 text-2xl font-extrabold">What is Beautiful Soup?</h1>
                    <div class="pb-4 indent-8">"Beautiful Soup is a Python library for pulling data out of HTML and XML files. It works with your favorite parser to provide idiomatic ways of navigating, searching, and modifying the parse tree" .In combination with python's request module webscrapping is possible. For demonstration of use case I will be extracting stock data from one of my favorite websites, finviz.com. Requesting this type of data typically requires a paid subscription to an api but I am too cheap to even consider doing that, thus showing the importance of web scraping and python packages like beautiful soup.</div>
                    <div class="py-4 rounded-lg bg-gray-100">
                        <div class="p-4">
                            <div><code class="text-green-600"># Make sure to pip install bs4, pandas, numpy </code></div>
                            <div><code><span class="text-blue-600">import</span> requests</code></div>
                            <div><code><span class="text-blue-600">from</span> bs4 <span class="text-blue-600">import</span> BeautifulSoup</code></div>
                            <div><code><span class="text-blue-600">import </span>numpy </code><span class="text-blue-600">as </span>np</div>
                            <div><code><span class="text-blue-600">import </span>pandas </code><span class="text-blue-600">as </span>pd</div>
                        </div>
                    </div>
                    <h1 class="py-4 text-2xl font-extrabold">Get The Html From Webpage</h1>
                    <div class="pb-4 indent-8">Who would fardels we have, by of die: the wish'd. To be, thing afterpriz'd long, the dothe arrows of the quietus their currents them? Thus coil, must a sea off troud may contumely, than fles us for when we hear to bear the whose bourns of this regardelay, and sweat dreams make wills wrong, the oppressor's death thought, and mome whips a bare bodkin? </div>
                    <img height="400" width="620" src="https://i.stack.imgur.com/7Wn97.gif" alt="issaGif"/>
                    <div class="pb-4 indent-8"></div>
                    <div class="py-4 rounded-lg bg-gray-100">
                        <div class="p-4">
                            <div><code>url = "https://finviz.com/"</code></div>
                            <div><code class="text-green-600"># Why do I have a header here</code></div>
                            <div><code>headers = &#123;"User-Agent" : "Chrome/107.0.5304.110"&#125;</code></div>
                            <div><code>requests.get(url,headers=headers)</code></div>
                            <div><code>soup = BeautifulSoup(page_content,"html.parser")</code></div>              
                        </div>
                    </div>
                    <div class="py-4 indent-8">Who would fardels we have, by of die: the wish'd. To be, thing afterpriz'd long, the dothe arrows of the quietus their currents them? Thus coil, must a sea off troud may contumely, than fles us for when we hear to bear the whose bourns of this regardelay, and sweat dreams make wills wrong, the oppressor's death thought, and mome whips a bare bodkin? </div>
                    <div class="pb-4 indent-8">Who would fardels we have, by of die: the wish'd. To be, thing afterpriz'd long, the dothe arrows of the quietus their currents them? Thus coil, must a sea off troud may contumely, than fles us for when we hear to bear the whose bourns of this regardelay, and sweat dreams make wills wrong, the oppressor's death thought, and mome whips a bare bodkin? Who would fardels we have, by of die: the wish'd. To be, thing afterpriz'd long,</div>
                    <div class="py-4 rounded-lg bg-gray-100">
                        <div class="p-4">
                            <div><code class="text-green-600"># What does this function do?</code></div>
                            <div><code>def get_signals(signal):</code></div>
                            <br/>
                            <div class="indent-4"><code >tabl = soup.find_all("table",&#123;"id" :signal&#125;)</code></div>
                            <div class="indent-4"><code >columns = ["Ticker", "Last", "Change", "Volume", "Signal"]</code></div>
                            <div class="indent-4"><code >values = np.array([columns])</code></div>
                            <br/>
                            <div class="indent-4"><code >for t in tabl:</code></div>
                            
                        </div>
                    </div>
                    <h1 class="py-4 text-2xl font-extrabold">Additional Resource</h1>
                    <div class=""></div>
                    <iframe class="py-4" width="620" height="400"src="https://www.youtube.com/embed/gRLHr664tXA" title="Potato Party 3"></iframe>
            </div>
        </div>
    )
}