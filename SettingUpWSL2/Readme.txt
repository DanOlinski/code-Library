*Command prompt = this is the terminal for windows, to open it open run, then type cmd (this will open command prompt as administrator 
but this is useless because its not like a linux terminal where you have access to the sourse code of the operating system
-There is a second Windows terminal (you find it by searching PowerShell) 
 

*wsl = this is a program that allows you to open a linux terminal inside of windows. To install it type wsl –-install -d Ubuntu in windows command prompt 

 

-If the username of the PC has a space on it find on youtube a step by step to change that otherwise it won`t work 

 

-for WLS to work you’ll have to run the following commands in windows terminal (open in andministrator mode), (reboot after running the following codes) 

 

dism.exe /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all /norestart 

 

dism.exe /online /enable-feature /featurename:VirtualMachinePlatform /all /norestart 

 

-Update kernel package for WSL below are a fiew options
(google how to do this or run the msi file I saved in a folder called Setting up WSL(only located in my PC)) 
(To run WSL from the Microsoft Store, with more frequently pushed updates, type in the command prompt wsl.exe --install
 

-RUN THE FOLLOWING CODE TO SET wsl2 AS DEFAOULT: 

 

wsl --set-default-version 2 

 

-run this code in windows terminal to make this specific directory: cd $env:LOCALAPPDATA ; mkdir LHL (this directory will be cerognized by the virtual linux that I am using from the LHL course)

 

-Run this command substitute YOU for username (LHL is the folder you created above. The file LHLv1.1.tar is in the “Setting up WSL” folder): wsl.exe --import LHL C:\Users\**YOU**\AppData\Local\LHL C:\Users\**YOU**\Downloads\lhl-v1.1.exe --version 2 

 

The file LHLv1.1.tar is the virtual machine, you can download this file from the page below. scroll down and fine a link named "Download the archive"
https://flex-web.compass.lighthouselabs.ca/p/1/workbooks/web-flex-prep/activities/2308?workbook=35

 

-install an app from windows store app called Windows Terminal 

Run Windows terminal and there should be and option under settings with a penguin figure that is your linux VR 

*when its running it might ask for a password before installing something, the password is labber

*The WLS will be installed here:
\\wsl$\LHL\home\labber
 

 

 

 

 

 

 
