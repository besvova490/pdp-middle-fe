import { HiArrowLeft, HiOutlineLocationMarker, HiHashtag } from "react-icons/hi";
import { MdModeEdit } from "react-icons/md";
import { BiUser } from "react-icons/bi";
import { useForm, FieldErrorsImpl } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";


// components
import PostThumbnail from "./components/PostThumbnail";

// elements
import Input, { Textarea } from "../../elements/Input";
import Button from "../../elements/Button";

// helpers
import { createEditPostValidation } from "../../../helpers/validationSchemas";
import CreateEditPostFormInterface, { PostInterface } from "../../../__types__/containers/Post.type";

// assets
import "../../../assets/styles/container/edit-user-profile.scss";


function CreateEditPost({ onGoBack, onSubmit, onError }: CreateEditPostFormInterface) {

  const { handleSubmit, setValue, watch, formState: { errors } } = useForm<PostInterface>({
    defaultValues: {
      thumbnail: "",
      description: "",
      title: "",
    },
    resolver: yupResolver(createEditPostValidation),
  });

  const {
    description,
    thumbnail,
    title,
  } = watch();

  const handleOnSubmit = (e: PostInterface) => {
    onSubmit && onSubmit(e);
  }

  const handleOnError = (e: FieldErrorsImpl<PostInterface>) => {
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
      <PostThumbnail
        thumbnailSrc={thumbnail}
        error={errors.thumbnail?.message}
        onChange={e => setValue("thumbnail", e ? e.url : null)}
      />
      <div className="pdp-chat-edit-user-profile__body">
        <div className="pdp-chat-edit-user-profile__body-row-title">
          Main information
        </div>
        <div className="pdp-chat-edit-user-profile__body-row">
          <Input
            fullWidth
            label="Title"
            name="title"
            error={errors.title?.message}
            value={title}
            onChange={e => setValue("title", e.target.value, { shouldTouch: true })}
          />
          <Textarea
            fullWidth
            label="Add a description"
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
            Add tags
          </div>
          <div className="pdp-chat-edit-user-profile__body-row-title">
            <HiOutlineLocationMarker className="pdp-chat-edit-user-profile__body-row-title-icon"/>
            <span>City or location</span>
            <span className="pdp-chat-edit-user-profile__body-row-edit">
              <MdModeEdit/>
            </span>
          </div>
          <div className="pdp-chat-edit-user-profile__body-row-title">
            <BiUser className="pdp-chat-edit-user-profile__body-row-title-icon"/>
            <span>Users</span>
            <span className="pdp-chat-edit-user-profile__body-row-edit">
              <MdModeEdit/>
            </span>
          </div>
          <div className="pdp-chat-edit-user-profile__body-row-title">
            <HiHashtag className="pdp-chat-edit-user-profile__body-row-title-icon"/>
            <span>Tags</span>
            <span className="pdp-chat-edit-user-profile__body-row-edit">
              <MdModeEdit/>
            </span>
          </div>
        </div>
      </div>
    </form>
  );
}

export default CreateEditPost;
