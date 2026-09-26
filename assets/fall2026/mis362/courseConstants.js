/*
    courseConstants.js
    ------------------
    Purpose: Instructor-controlled course variables, used for all forms and UI on student HomePage and assignments.
    Location: /ReadOnly/courseConstants.js
    Access: Students read-only; instructor/admin edit only.
    Contains only variables/constants and derived display strings.
    No logic or functions should be added here.
*/

var Semester = "Fall2026";
var Class = "MIS362";
var Section = "03";

// Versioning and admin info
var CourseConstantsVersion = "1.1";
var LastUpdated = "2025-06-07";

// Derived display values (built from studentConstants.js values)
var studentEmailAddress = (typeof StarID !== "undefined" ? StarID : "undefined") + "@go.minnstate.edu";
var NetworkUsernameLink = (typeof NetworkUsername !== "undefined" && NetworkUsername && NetworkUsername.trim() !== "")
    ? '<a href="https://studentwebs.winona.edu/' + NetworkUsername + ' target="_blank">Studentwebs</a>'
    : '<span style="color: red; font-weight: bold;">Network username value not set in studentConstants.js</span>';
var studentEmailLink = (typeof FirstName !== "undefined" && typeof LastName !== "undefined" && typeof Class !== "undefined" && typeof Section !== "undefined") ?
    '<a href="mailto:' + studentEmailAddress + '?subject=' + Class + '-' + Section + 'AssignmentFeedback&amp;cc=mista@winona.edu&amp;body=' +
    FirstName + ' ' + LastName + '%2C%0A%0AFor%20assistance%20correcting%20any%20errors%20please%20contact%20a%20course%20TA%20or%20Professor%20Paulson" class="text-danger h3">Email Feedback to ' +
    FirstName + '</a>' : "undefined";
var pageHeading = (typeof FirstName !== "undefined" && typeof LastName !== "undefined" && typeof Class !== "undefined" && typeof Section !== "undefined" && typeof Semester !== "undefined") ?
    '<h1 class="text-center text-primary">' + FirstName + ' ' + LastName + ' ' + Class + '-' + Section + ' ' + Semester + ' Home Page</h1>' :
    '<h1 class="text-center text-primary">MIS202 Home Page</h1>';
var ccLicense =
    '<a rel="license" href="http://creativecommons.org/licenses/by/4.0/"><img alt="Creative Commons License" src="https://i.creativecommons.org/l/by/4.0/88x31.png" /></a><br />' +
    '<span>eProfessor Immersive Learning Environment</span> by <a xmlns:cc="http://creativecommons.org/ns#" href="https://eprofessor.azurewebsites.net" property="cc:attributionName" rel="cc:attributionURL">Patrick G Paulson</a> is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 International License</a>.';
