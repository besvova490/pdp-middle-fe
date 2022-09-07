import { HiArrowLeft, HiOutlineLocationMarker } from "react-icons/hi";
import { MdModeEdit } from "react-icons/md";
import { useForm, FieldErrorsImpl } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

// components
import UserThumbnail from "./components/UserThumbnail";

// helpers
import { editUserProfileValidation } from "../../../helpers/validationSchemas";
import EditUserProfileFormInterface, { EditUserProfileInterface } from "../../../__types__/containers/EditUserProfile.types";

// elements
import Button from "../../elements/Button";
import Input, { Textarea } from "../../elements/Input";

// assets
import "../../../assets/styles/container/edit-user-profile.scss";


function EditUserProfile({ onSubmit, onError, onGoBack, defaultValues }: EditUserProfileFormInterface) {

  const { handleSubmit, setValue, watch, formState: { errors, touchedFields } } = useForm<EditUserProfileInterface>({
    defaultValues: {
      avatar: defaultValues?.avatar,
      thumbnailImage: defaultValues?.thumbnailImage,
      userName: defaultValues?.userName,
      interests: [],
      fullName: defaultValues?.fullName,
      description: defaultValues?.description,
      address: defaultValues?.address,
      phone: defaultValues?.phone,
      email: defaultValues?.email,
    },
    resolver: yupResolver(editUserProfileValidation),
  });

  const {
    avatar,
    thumbnailImage,
    userName,
    fullName,
    description,
    phone,
    email
  } = watch();


  const handleOnSubmit = (e: EditUserProfileInterface) => {
    const changedFieldsNames = Object.keys(touchedFields);
    const data: { [key: string]: unknown } = {};

    changedFieldsNames.forEach((key) => {
      data[key] = e[key as keyof EditUserProfileInterface];
    });

    onSubmit && onSubmit(data);
  }

  const handleOnError = (e: FieldErrorsImpl<EditUserProfileInterface>) => {
    onError && onError(e);
  }


  return (
    <form className="pdp-chat-edit-user-profile" onSubmit={handleSubmit(handleOnSubmit, handleOnError)}>
      <div className="pdp-chat-edit-user-profile__header">
        <div className="pdp-chat-edit-user-profile__header-go-back" onClick={() => onGoBack && onGoBack()}>
          <HiArrowLeft className="pdp-chat-edit-user-profile__header-go-back-icon"/>
          <span>Edit profile</span>
        </div>
        <Button
          shape="round"
          htmlType="submit"
          type="primary"
          size="small"
        >
          Save
        </Button>
      </div>
      <div>
        <UserThumbnail
          username="christinegz"
          thumbnailSrc={thumbnailImage || ""}
          avatarSrc={avatar || ""}
          onChange={(key, value) => setValue(key, value, { shouldTouch: true })}
        />
      </div>
      <div className="pdp-chat-edit-user-profile__body">
        <div className="pdp-chat-edit-user-profile__body-row">
          <Input
            fullWidth
            label="My username"
            name="username"
            error={errors.userName?.message}
            value={userName}
            onChange={e => setValue("userName", e.target.value, { shouldTouch: true })}
          />
        </div>
        <div className="pdp-chat-edit-user-profile__body-row">

        </div>
        <div className="pdp-chat-edit-user-profile__body-row">
          <div className="pdp-chat-edit-user-profile__body-row-title">
            My information
          </div>
          <Input
            fullWidth
            label="Complete name"
            error={errors.fullName?.message}
            value={fullName}
            name="fullName"
            onChange={e => setValue("fullName", e.target.value, { shouldTouch: true })}
          />
          <Textarea
            fullWidth
            label="Short bio or description"
            showCount
            maxLength={500}
            name="description"
            error={errors.description?.message}
            value={description}
            onChange={e => setValue("description", e.target.value, { shouldTouch: true })}
          />
        </div>
        <div className="pdp-chat-edit-user-profile__body-row">
          <div className="pdp-chat-edit-user-profile__body-row-title">
            <span>City or location</span>
            <span className="pdp-chat-edit-user-profile__body-row-edit">
              <MdModeEdit/>
            </span>
          </div>
          <div className="pdp-chat-edit-user-profile__location">
            <HiOutlineLocationMarker className="pdp-chat-edit-user-profile__location-icon"/>
            <span className="pdp-chat-edit-user-profile__location-label">
              Belgrave Square, Belgravia
            </span>
          </div>
        </div>
        <div className="pdp-chat-edit-user-profile__body-row">
          <Input
            fullWidth
            label="Business phone"
            name="phone"
            value={phone}
            onChange={e => setValue("phone", e.target.value, { shouldTouch: true })}
            error={errors.phone?.message}
          />
          <Input
            fullWidth
            label="Business email"
            name="email"
            value={email}
            onChange={e => setValue("email", e.target.value, { shouldTouch: true })}
            error={errors.email?.message}
          />
        </div>
      </div>
    </form>
  );
}

export default EditUserProfile;
