import AppHeader from "@components/Shared/header";
import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="wrapper">
        <AppHeader />
        <div className="tab-holder">
          <div className="container">
            <div className="d-flex">
              <div
                className="nav flex-column nav-pills"
                id="v-pills-tab"
                role="tablist"
                aria-orientation="vertical"
              >
                <button
                  className="nav-link active"
                  id="v-pills-home-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-home"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-home"
                  aria-selected="true"
                >
                  <span className="tabicon icon-files"></span>
                  <span className="tab-text">Conversion</span>
                </button>
                <button
                  className="nav-link"
                  id="v-pills-profile-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-profile"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-profile"
                  aria-selected="false"
                >
                  <span className="tabicon icon-collapse"></span>
                  <span className="tab-text">Compressions</span>
                </button>
                <button
                  className="nav-link"
                  id="v-pills-messages-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-messages"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-messages"
                  aria-selected="false"
                >
                  <span className="tabicon icon-images"></span>
                  <span className="tab-text">Images Tools</span>
                </button>
                <button
                  className="nav-link"
                  id="v-pills-settings-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-settings"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-settings"
                  aria-selected="false"
                >
                  <span className="tabicon icon-file-play"></span>
                  <span className="tab-text">Audio/video tools</span>
                </button>
                <button
                  className="nav-link"
                  id="v-pills-settings-tab1"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-settings1"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-settings1"
                  aria-selected="false"
                >
                  <span className="tabicon icon-file-picture"></span>
                  <span className="tab-text">OCR</span>
                </button>
                <button
                  className="nav-link"
                  id="v-pills-settings-tab2"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-settings2"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-settings2"
                  aria-selected="false"
                >
                  <span className="tabicon icon-file-empty"></span>
                  <span className="tab-text">File Viewers</span>
                </button>
              </div>
              <div className="tab-content" id="v-pills-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="v-pills-home"
                  role="tabpanel"
                  aria-labelledby="v-pills-home-tab"
                >
                  <div className="heading">
                    <h1>Conversion Tools</h1>
                  </div>
                  <ul>
                    <li>
                      <a href="#">MS Word to PDF</a>
                    </li>
                    <li>
                      <a href="#">CSV to JSON</a>
                    </li>
                    <li>
                      <a href="#">CSV to PDF</a>
                    </li>
                    <li>
                      <a href="#">CSV to HTML</a>
                    </li>
                    <li>
                      <a href="#">CSV to SQL</a>
                    </li>
                    <li>
                      <a href="#">Images to PDF</a>
                    </li>
                    <li>
                      <a href="#">XML to XLSX</a>
                    </li>
                    <li>
                      <a href="#">CSV to XLSX</a>
                    </li>
                    <li>
                      <a href="#">HTML to PDF</a>
                    </li>
                    <li>
                      <a href="#">CSV To Delimited</a>
                    </li>
                    <li>
                      <a href="#">CSV To Flat File</a>
                    </li>
                    <li>
                      <a href="#">CSV To GeoJSON</a>
                    </li>
                    <li>
                      <a href="#">CSV To HTML Table</a>
                    </li>
                    <li>
                      <a href="#">CSV To JSON</a>
                    </li>
                    <li>
                      <a href="#">CSV To KML</a>
                    </li>
                    <li>
                      <a href="#">CSV To Markdown</a>
                    </li>
                    <li>
                      <a href="#">CSV To Multi-line Data</a>
                    </li>
                    <li>
                      <a href="#">CSV To PDF</a>
                    </li>
                    <li>
                      <a href="#">CSV To SQL</a>
                    </li>
                  </ul>
                </div>
                <div
                  className="tab-pane fade"
                  id="v-pills-profile"
                  role="tabpanel"
                  aria-labelledby="v-pills-profile-tab"
                >
                  <h1>Compressions</h1>
                  <ul>
                    <li>
                      <a href="#">Files compress/Decompress</a>
                    </li>
                  </ul>
                </div>
                <div
                  className="tab-pane fade"
                  id="v-pills-messages"
                  role="tabpanel"
                  aria-labelledby="v-pills-messages-tab"
                >
                  <h1>Image Tools</h1>
                  <ul>
                    <li>
                      <a href="#">Resize Image</a>
                    </li>
                    <li>
                      <a href="#">Compress Image</a>
                    </li>
                    <li>
                      <a href="#">Change background</a>
                    </li>
                    <li>
                      <a href="#">Black & White Conversion</a>
                    </li>
                  </ul>
                </div>
                <div
                  className="tab-pane fade"
                  id="v-pills-settings"
                  role="tabpanel"
                  aria-labelledby="v-pills-settings-tab"
                >
                  <h1>Audio/Video Tools</h1>
                  <ul>
                    <li>
                      <a href="#">Resize Image</a>
                    </li>
                    <li>
                      <a href="#">Compress Image</a>
                    </li>
                    <li>
                      <a href="#">Change background</a>
                    </li>
                    <li>
                      <a href="#">Black & White Conversion</a>
                    </li>
                  </ul>
                </div>
                <div
                  className="tab-pane fade"
                  id="v-pills-settings1"
                  role="tabpanel"
                  aria-labelledby="v-pills-settings-tab1"
                >
                  <h1>OCR Tools</h1>
                  <ul>
                    <li>
                      <a href="#">Image to text</a>
                    </li>
                  </ul>
                </div>
                <div
                  className="tab-pane fade"
                  id="v-pills-settings2"
                  role="tabpanel"
                  aria-labelledby="v-pills-settings-tab2"
                >
                  <h1>File Viewers</h1>
                  <ul>
                    <li>
                      <a href="#">Adobe related files</a>
                    </li>
                    <li>
                      <a href="#">SQL Files</a>
                    </li>
                    <li>
                      <a href="#">Offic. PDF</a>
                    </li>
                    <li>
                      <a href="#">JSON, XML. CSV</a>
                    </li>
                    <li>
                      <a href="#">JSON, XML. CSV</a>
                    </li>
                    <li>
                      <a href="#">Video. Images Audio</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="sp-feature">
          <div className="container">
            <h2>Special Features</h2>
            <div className="row">
              <div className="col-lg-4 d-flex">
                <div className="feather-area">
                  <div className="circle">
                    <span className="icon-sp icon-browser"></span>
                  </div>
                  <h3>Convert to/from</h3>
                  <p>
                    HTML, JSON, XML Text, KML, YAML, Media Wiki, Markdown plus
                    many more.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 d-flex">
                <div className="feather-area pink">
                  <div className="circle">
                    <span className="icon-sp icon-document"></span>
                  </div>
                  <h3>CSV Viewer and Editor</h3>
                  <p>can read or edit any Excel file. Including large files.</p>
                </div>
              </div>
              <div className="col-lg-4 d-flex">
                <div className="feather-area perpal">
                  <div className="circle">
                    <span className="icon-sp icon-documents"></span>
                  </div>
                  <h3>Copy and paste Excel data</h3>
                  <p>
                    into our tools as Tab separated (TSV). Read and Convert
                    Excel to CSV automatically.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 d-flex">
                <div className="feather-area blue">
                  <div className="circle">
                    <span className="icon-sp icon-layers"></span>
                  </div>
                  <h3>Use SQL to query CSV</h3>
                  <p>
                    and write to CSV or JSON. Field separators auto-detect mode
                    is default.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 d-flex">
                <div className="feather-area green">
                  <div className="circle">
                    <span className="icon-sp icon-envelope"></span>
                  </div>
                  <h3>Extract emails</h3>
                  <p>or URLs from web pages. Write the data to CSV.</p>
                </div>
              </div>
              <div className="col-lg-4 d-flex">
                <div className="feather-area pink">
                  <div className="circle">
                    <span className="icon-sp icon-document"></span>
                  </div>
                  <h3>CSV Viewer and Editor</h3>
                  <p>can read or edit any Excel file. Including large files.</p>
                </div>
              </div>
              <div className="col-lg-4 d-flex">
                <div className="feather-area perpal">
                  <div className="circle">
                    <span className="icon-sp icon-documents"></span>
                  </div>
                  <h3>Copy and paste Excel data</h3>
                  <p>
                    into our tools as Tab separated (TSV). Read and Convert
                    Excel to CSV automatically.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 d-flex">
                <div className="feather-area blue">
                  <div className="circle">
                    <span className="icon-sp icon-layers"></span>
                  </div>
                  <h3>Use SQL to query CSV</h3>
                  <p>
                    and write to CSV or JSON. Field separators auto-detect mode
                    is default.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 d-flex">
                <div className="feather-area green">
                  <div className="circle">
                    <span className="icon-sp icon-envelope"></span>
                  </div>
                  <h3>Extract emails</h3>
                  <p>or URLs from web pages. Write the data to CSV.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="howitwork">
          <div className="container">
            <h2>How it Work</h2>
            <div className="work-view">
              <span className="line"></span>
              <span className="start active">1</span>
              <span className="mid">2</span>
              <span className="end">3</span>
            </div>
            <div className="work-math">
              <div className="work-area">
                <span className="btn-area mb-2">
                  Upload File{" "}
                  <span className="ionwork icon-upload-cloud"></span>
                </span>
                <span className="subtittle">
                  Drag & drop files, or select link Max. <br />
                  file size 50MB (want more?)
                </span>
              </div>
              <div className="work-area">
                <span className="btn-area mb-3">
                  Upload File{" "}
                  <span className="ionwork icon-chevron-thin-down"></span>
                </span>
                <span className="subtittle">Or choose a different format</span>
              </div>
              <div className="work-area">
                <span className="btn-area mb-2">
                  Download File{" "}
                  <span className="ionwork icon-download-cloud"></span>
                </span>
                <span className="subtittle">
                  (And agree to our Terms) <br /> &#10003; Email when done?
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-content">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-3">
                <ul className="footer-list">
                  <li>
                    <strong>INFO</strong>
                  </li>
                  <li>
                    <a href="#">Formats</a>
                  </li>
                  <li>
                    <a href="#">Compression</a>
                  </li>
                  <li>
                    <a href="#">Pricing</a>
                  </li>
                  <li>
                    <a href="#">FAQ</a>
                  </li>
                  <li>
                    <a href="#">Status</a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-3">
                <ul className="footer-list">
                  <li>
                    <strong>POPULAR</strong>
                  </li>
                  <li>
                    <a href="#">ODT to PDF</a>
                  </li>
                  <li>
                    <a href="#">WMA to MP3</a>
                  </li>
                  <li>
                    <a href="#">CSV to XLS</a>
                  </li>
                  <li>
                    <a href="#">PDF to CSV</a>
                  </li>
                  <li>
                    <a href="#">EPUB to MOBI</a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-3">
                <ul className="footer-list">
                  <li>
                    <strong>COMPANY</strong>
                  </li>
                  <li>
                    <a href="#">About Us</a>
                  </li>
                  <li>
                    <a href="#">Sustainability</a>
                  </li>
                  <li>
                    <a href="#">Terms of Service</a>
                  </li>
                  <li>
                    <a href="#">Privacy</a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-3">
                <ul className="footer-list">
                  <li>
                    <strong>RESOURCES</strong>
                  </li>
                  <li>
                    <a href="#">Developer API</a>
                  </li>
                  <li>
                    <a href="#">Tools</a>
                  </li>
                  <li>
                    <a href="#">Blog</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <footer id="footer">
          <div className="container">
            <p>
              &copy; 2022 <a href="">conversion</a>
            </p>
            <ul className="socialmedia">
              <li>
                <a href="#" className="icon-facebook-f"></a>
              </li>
              <li>
                <a href="#" className="icon-google-plus-g"></a>
              </li>
              <li>
                <a href="#" className="icon-pinterest-p"></a>
              </li>
              <li>
                <a href="#" className="icon-twitter"></a>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </div>
  );
}
