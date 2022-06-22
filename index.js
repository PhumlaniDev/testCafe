import { Selector } from "testcafe";

const jobSeekerButton = Selector(".jj-bg-green.btn-jj-2");

const registerPageTitle = Selector(".text-lighter");
const loginPageTitle = Selector(".text-lighter");

const firstName = Selector("[placeholder='e.g John']");
const lastName = Selector("[placeholder='e.g Doe']");
const contactNumber = Selector("[placeholder='e.g 0123456789']");
const email = Selector("[name='email']");
const location = Selector("[autocomplete='a5039373a9e3']");
const password = Selector("[name='password']");

// Test passed
fixture`Job Seeker Application Profile`.page("https://jobjack.co.za/");

test("A user can redirect to register page", async (t) => {
	await t.click(jobSeekerButton);
	await t.expect(registerPageTitle.exists).ok();
});

// Test fails
fixture`Job Seeker Register Page`.page(
	"https://app.jobjack.co.za/auth?jack=true"
);

test("User can register", async (t) => {
	await t.typeText("John", firstName);
	await t.typeText("Doe", lastName);
	await t.typeText("0123456789", contactNumber);
	await t.typeText("john.doe@gmail.com", email);
	await t.typeText("Cape Town", location);
	await t.typeText("password", password);
	await t.expect(loginPageTitle.exists()).ok();
});
