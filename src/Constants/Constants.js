const CONSTANTS =
{
    FORMIK:
    {
        ZIP: "Please enter a valid Zip Code",
        REQUIRED_FIELD: "This is required field*",
        SSN_CODE: "SSN code should be of 4 digits*",
        BUSINESS_WEBSITE: "Please enter a valid URL*",
        DATE_OF_BIRTH: "You must be 13 years or older to use this app*",
        BANK_ACCOUNT: "Bank Account should be between 11 and 15 digits",
    },
    URL:
    {
        VALID_URL: /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/
    },
    UI:
    {
        AUTOCOMPLETE: "off",
        BUTTON_TYPE: "button",
        SUBMIT_TYPE: "submit",
        BUTTON_COLOR: "primary",
        BUTTON_VARIANT: "contained",
        TEXT_FIELD_VARIANT: "outlined",
        DATE_PICKER_VARIANT: "outlined",
        DATE_PICKER_FORMAT: "MM/dd/yyyy",
        IMG_UN_AVAILABlE: "Not Available",
        DUMMY_AVATAR: "/static/images/avatar/1.jpg"
    },
    NAME:
    {
        NEXT_BUTTON: "NEXT",
        PREV_BUTTON: "PREV.",
        SUBMIT_BUTTON: "SUBMIT"
    },
    FIELDS:
    {
        CITY_TITLE: "city",
        CITY_LABEL: "City",
        ZIP_TITLE: "zip",
        ZIP_LABEL: "ZIP",
        SSN_TITLE: "ssnCode",
        DOB_TITLE: "dateOfBirth",
        DOB_LABEL: "Date Of Birth",
        LAST_NAME_TITLE: "lastName",
        LAST_NAME_LABEL: "Last Name",
        BACK_PROOF_TITLE: "proofBack",
        FIRST_NAME_TITLE: "firstName",
        FRONT_PROOF_TITLE: "proofFront",
        FIRST_NAME_LABEL: "First Name",
        ADDRESS_TITLE: "streetAddress",
        ADDRESS_LABEL: "Street Address",
        SSN_LABEL: "Last 4 Digits of SSN",
        BANK_ACCOUNT_TITLE: "bankAccount",
        BANK_ACCOUNT_LABEL: "Bank Account",
        BUSINESS_NAME_TITLE: "businessName",
        BUSINESS_NAME_LABEL: "Business Name",
        BUSINESS_WEBSITE_TITLE: "businessWebsite",
        BUSINESS_WEBSITE_LABEL: "Business Website",
    },
    FORM_HEADING:
    {
        IDENTITY_PROOF: "Upload Identity Proof",
        BUSINESS_PROFILE: "Enter Your Business Details",
        BANKING_DETAILS: "Enter Your Banking Details"
    }
};

export default Object.freeze( CONSTANTS );