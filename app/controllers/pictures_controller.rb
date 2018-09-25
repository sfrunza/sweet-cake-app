class PicturesController < ApiController



    # GET /pictures
    # GET /pictures.json
    def index
      @pictures = Picture.all
      render json: @pictures.to_json
    end

    # GET /pictures/1
    # GET /pictures/1.json
    def show
      @picture = Picture.find(params[:id])
      render json: @picture.to_json
    end

    # POST /pictures
    # POST /pictures.json
    def create
      @picture_new = Picture.new(picture_params)
      @picture_new.save

      @picture.deliver

    end

    # PATCH/PUT /pictures/1
    # PATCH/PUT /pictures/1.json
    def update
      if @picture.update(picture_params)
        render :show, status: :ok, location: @picture
      else
        render json: @picture.errors, status: :unprocessable_entity
      end
    end

    # DELETE /pictures/1
    # DELETE /pictures/1.json
    def destroy
      @picture.destroy
    end

    private
      # Use callbacks to share common setup or constraints between actions.
      def set_picture
        @picture = Picture.find(params[:id])
      end

      # Never trust parameters from the scary internet, only allow the white list through.
      def picture_params
        params.require(:picture).permit(:picture, :name, :description)
      end
end
