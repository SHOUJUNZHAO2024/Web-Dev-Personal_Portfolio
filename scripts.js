/*
    Name: SHOUJUN ZHAO
    File Name: scripts.js
    Date: June 29, 2024
    Description: JavaScript for project navigation
*/

// Wait for the DOM to fully load before executing the script
document.addEventListener('DOMContentLoaded', function() {
    // Select all elements with the class 'project'
    const projects = document.querySelectorAll('.project');
    let currentProject = 0;

    // Add click event listener to the 'next' button
    document.getElementById('next').addEventListener('click', function() {
        // Hide current project and show next project
        projects[currentProject].classList.remove('active');
        currentProject = (currentProject + 1) % projects.length;
        projects[currentProject].classList.add('active');
    });

    // Add click event listener to the 'prev' button
    document.getElementById('prev').addEventListener('click', function() {
        // Hide current project and show previous projec
        projects[currentProject].classList.remove('active');
        currentProject = (currentProject - 1 + projects.length) % projects.length;
        projects[currentProject].classList.add('active');
    });
    
// Initially show the first project
    projects[currentProject].classList.add('active');
});