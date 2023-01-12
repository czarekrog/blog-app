import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useRemovePost } from "../../hooks/post/useRemovePost";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";

interface Props {
  postId: string;
  postTitle: string;
}

export const RemovePostDialog = ({ postId, postTitle }: Props) => {
  const [open, setOpen] = React.useState(false);
  const { remove } = useRemovePost();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleRemove = () => {
    remove({ id: postId });
    setOpen(false);
  };

  return (
    <div>
      <FontAwesomeIcon
        icon={faTrashCan}
        onClick={handleClickOpen}
        className="icon"
      />
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Do you want to remove this post?
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Post <b>{postTitle}</b> will be removed and this operation is
            irreversible.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleRemove} autoFocus>
            Remove
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
