# frozen_string_literal: true

json.array! @lists, partial: 'api/lists/list', as: :list
