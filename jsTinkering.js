header-------------
import * as React from 'react';
import "./Header.scss"
import HeaderMenu from "./HeaderMenu";
import globalStates from '../hooks/globalStates';

export default function Header() {
  const { content, setContent } = globalStates()

 //This function will change the content state to 'email', the e-mail component is rendered within a conditional statement that checks if the content state is set to 'email'
const handelEmailClick = () => {
  setContent('email')
}

//This function will change the content state value to 'content', the content component is rendered within a conditional statement that checks if the content value of state is set to 'content'
const handelHomeClick = () => {
  setContent('content')
}


  return (
    <div className="header">
<div className='header-main-div'>


<div className='icons'>

        <a href="https://flowcv.com/resume/k7nvdbtl1r" target="_blank">
          <img className="icon resume" src="../../images/resume.png"></img>
        </a>
        <a href="https://www.linkedin.com/in/daniel-olinski-guterres-6542a550/" target="_blank">
          <img className="icon linkedin" src="../../images/linkedin.png"></img>
        </a>
        <a href="https://github.com/DanOlinski" target="_blank">
          <img className="icon github" src="../../images/github.png"></img>
        </a>

          <img onClick={handelEmailClick} className="icon email" src="../../images/email.png"></img>

      </div>

      <img onClick={handelHomeClick} className="header-img" src="../../images/profile.jpg"></img>
      
      <div className='intro'>
        
          <div className='intro-hi'>
            Hi, I am
            <div className='intro-name'>
             Daniel Olinski G.
          </div>
          </div>

          <div className='intro-what-i-do'>
            Full Stack Software Developer
          </div>
          
          </div>


    </div>
      <HeaderMenu />

    </div>
  );
}

--------------------header menubar
import * as React from 'react';
import "./HeaderMenu.scss"
import globalStates from '../hooks/globalStates';

export default function HeaderMenu() {
  const { dropDown, setDropDown } = globalStates()
  const { setContent } = globalStates()

  //This function will change the content state to 'email', the e-mail component is rendered within a conditional statement that checks if the content state is set to 'email'
  const handelEmailClick = () => {
    setContent('email')
    setDropDown(false)
  }

  //This function will change the content state value to 'content', the content component is rendered within a conditional statement that checks if the content value of state is set to 'content'
  const handelHomeClick = () => {
    setContent('content')
    setDropDown(false)
  }

  //---------------------

  //when menu icon is clicked change the dropDown state to the opposite value from what it is currently (true or false). This state is used in the function renderDropDownMenu, in a conditional statement.
  const handelMenuClick = () => {
    setDropDown(!dropDown)
  }

  //this is used to set a reference value for a div (in the div you want to reference place ref="<variable>") the variable name has to end with Ref
  //this reference is used for the useEffect below to identify when the user clicks outside of a given div, so that the dropDown hook can be set to false, triggering the conditional statement in the function renderDropDownMenu and consequently closing the drop down menu
  const menuRef = React.useRef();

  //this useEffect listens for clicks on the browser, if the click occurs outside of the drop down menu (detect by the use of the variable declared above; menuRef), the dropDown state will be changed to false triggering the conditional statement in the function renderDropDownMenu and consequently closing the drop down menu
  React.useEffect(() => {

    //this function is called in the event listener below, and checks if a click occured outside of the drop down menu, it then sets the value of dropDown state to false.
    const closeMenuOnClickOutside = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setDropDown(false)
      }
    }

    //event listener
    document.body.addEventListener('mousedown', closeMenuOnClickOutside);

    //this function terminates the event listener in order to make the interface run more efficiently
    return () => {
      document.body.removeEventListener('mousedown', closeMenuOnClickOutside);
    }

  }, [])

  //when clicking outside of the menu element the useEffect detects that and closes the menu dropdown. If that is not set the menu will close before the action of clicking on one of the options can be executed. However after the option is executed the menu should be close and that is what the following function is designed for
  const closeMenu = () => {
    setDropDown(false)
  }

    //if the dropDown state is true this function will render the dropdown menu. else it will not
    const renderDropDownMenu = () => {
      if (dropDown) {
        return (
          <div className='dropdown'>
            <div onClick={handelHomeClick} className='dropdown-options'>Home</div>
            <div className='dropdown-line'></div>
            <div className='dropdown-options'>Projects</div>
            <div className='dropdown-line'></div>
            <div onClick={closeMenu} className='dropdown-options'>
              <a className='a-element' href="https://flowcv.com/resume/k7nvdbtl1r" target="_blank">
                <img className="icon-list" src="../../images/resume-w.png"></img>
                Resume
              </a>
            </div>
            <div className='dropdown-line'></div>
            <div onClick={closeMenu} className='dropdown-options'>
              <a className='a-element' href="https://github.com/DanOlinski" target="_blank">
                <img className="icon-list" src="../../images/github-w.png"></img>
                Github
              </a>
            </div>
            <div className='dropdown-line'></div>
            <div onClick={closeMenu} className='dropdown-options'>
              <a className='a-element' href="https://www.linkedin.com/in/daniel-olinski-guterres-6542a550/" target="_blank">
                <img className="icon-list" src="../../images/linkedin-w.png"></img>
                Linkedin
              </a>
            </div>
            <div className='dropdown-line'></div>
            <div onClick={handelEmailClick} className='dropdown-options'>
              <img className="icon-list" src="../../images/email-w.png"></img>
              Send Email
            </div>
  
          </div>
        )
      }
  
    }

  return (
    
    <div ref={menuRef}>
      <div>
      <div className="menu-icon" onClick={handelMenuClick}>
        <div className="menu-icon-line"></div>
        <div className="menu-icon-line-center"></div>
        <div className="menu-icon-line"></div>
      </div>


    </div>
    {renderDropDownMenu()}
    </div>
  );
}

